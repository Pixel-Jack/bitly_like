import jwt
from django.contrib.auth import authenticate, logout
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist, MultipleObjectsReturned
from django.shortcuts import redirect, get_object_or_404, render

from .form import BitLinkForm, ConnexionForm
from .models import BitLink


# Create your views here.
def home(request):
    form = BitLinkForm()
    try:
        list_your_links, updated_str_bitlinks = find_info_your_links(request.COOKIES)
        response = render(request, 'bitly_like/home.html', locals())
        response.set_cookie('your_links', updated_str_bitlinks)
        return response
    except UnboundLocalError:
        # if there is no COOKIES
        return render(request, 'bitly_like/home.html', locals())


def find_info_your_links(cookie):
    # We load the cookies created by the user
    try:
        your_bitlink_list = cookie['your_links'].split(',')
        list_infos, updated_str_bitlinks = gather_info_on_bitlink_list(your_bitlink_list)
    except KeyError as e:
        list_infos = [e.args]
    return list_infos, updated_str_bitlinks


def gather_info_on_bitlink_list(list_bit_link):
    """
    Go in the models Bitlink in order to find all infos about link of the list_bit_link
    :param list_bit_link:
    :return: list of dict : [{bit_link: str, link: str, count: int, user: Model.user, date_creation: date}...]
    """
    list_infos = []
    # usefull in order to erase from the cookie wrong bitlink
    updated_str_bitlink_list = []
    for bitlink in list_bit_link:
        try:
            infos = BitLink.objects.get(bit_link=bitlink)
            list_infos.append(infos)
            updated_str_bitlink_list.append(bitlink)
        except ObjectDoesNotExist:
            print("Either the entry or bitlink {} doesn't exist in the cookie.".format(bitlink))
            continue
        except MultipleObjectsReturned:
            print("Mutliple link returned for the bitlink {}".format(bitlink))
            continue
    return list_infos, ','.join(updated_str_bitlink_list)


def reduce_link(request):
    response = redirect(home)
    if request.method == 'POST':
        form = BitLinkForm(request.POST)
        if form.is_valid():
            # It's a new bit link
            link = form.cleaned_data['link']
            new_bit_link = BitLink(link=link)
            new_bit_link.save()
            response = add_bitlink_to_cookie(response, request, new_bit_link.bit_link)
        else:
            # there was an issue
            link = request.POST['link']
            try:
                bit_link_object = BitLink.objects.get(link=link)
                # the issue was because this link already existed in the db so we return the right bit_link
                response = add_bitlink_to_cookie(response, request, bit_link_object.bit_link)
            except BitLink.models.DoesNotExist:
                # there is an error in the link
                print("Views : reduce link Error in the link {} ".format(link))
    return response


def add_bitlink_to_cookie(res, req, bit_link):
    try:
        str_your_links = req.COOKIES['your_links']
        if bit_link not in str_your_links:
            # in order to keep the order descending by date of creation of the link
            str_your_links = str(bit_link) + ',' + str_your_links
    except KeyError:
        # New cookie without bitlink in it
        str_your_links = '{}'.format(bit_link)
    res.set_cookie('your_links', str_your_links)
    return res


def get_link(request, bit_link):
    bit_link_object = get_object_or_404(BitLink, bit_link=bit_link)
    link = bit_link_object.link
    bit_link_object.add_count()
    return redirect(link)


def sign_up(request):
    request = clean_cookie(request)
    response = redirect(home)
    form = UserCreationForm()
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            form.save()
            # It's a new bit link
            response = redirect('user space')
            encoded = jwt.encode({'username': username}, 'secret', algorithm='HS256')
            response.set_cookie('token_jwt', encoded)
            response.set_cookie('username', username)
            return response
    return render(request, 'bitly_like/sign_up.html', locals())


def sign_in(request):
    to_redirect, redirection = middle_if_jwt_token_redirect(request)
    if to_redirect:
        return redirection
    form = ConnexionForm()
    if request.method == 'POST':
        form = ConnexionForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(username=username, password=password)
            if user:
                # It's a new bit link
                response = redirect(user_space)
                encoded = jwt.encode({'username': username}, 'secret', algorithm='HS256')
                response.set_cookie('token_jwt', encoded)
                response.set_cookie('username', username)
                return response
    return render(request, 'bitly_like/sign_in.html', locals())


def user_space(request):
    try:
        username = request.COOKIES['username']
        encoded = request.COOKIES['token_jwt']
        decoded = jwt.decode(encoded, 'secret', algorithms=['HS256'])
        # Test JWT
        if decoded['username'] == username:
            # here we have a good token so we are authentificated
            form = BitLinkForm()
            user = User.objects.get(username=username)
            if request.method == 'POST':
                form = BitLinkForm(request.POST)
                if form.is_valid():
                    # It's a new bit link
                    link = form.cleaned_data['link']
                    new_bit_link = BitLink(link=link, user=user)
                    new_bit_link.save()
                else:
                    # there was an issue
                    link = request.POST['link']
                    try:
                        bit_link_object = BitLink.objects.get(link=link)
                        # the issue was because this link already existed in the db so we return the right bit_link
                        response = add_bitlink_to_cookie(response, request, bit_link_object.bit_link)
                    except BitLink.models.DoesNotExist:
                        # there is an error in the link
                        print("Views : reduce link Error in the link {} ".format(link))
            list_your_links = BitLink.objects.filter(user=user)
            return render(request, 'bitly_like/user.html', locals())
        else:
            return clean_and_to_sign_up(request)
    except KeyError as e:
        # here we suppose that we have a corrupted token so we clean the cookie
        return clean_and_to_sign_up(request)


def clean_and_to_sign_up(request):
    return sign_up(clean_cookie(request))


def clean_cookie(request):
    try:
        del request.COOKIES['username']
    except:
        pass
    try:
        del request.COOKIES['token_jwt']
    except:
        pass
    return request


def middle_if_jwt_token_redirect(request):
    try:
        username = request.COOKIES['username']
        encoded = request.COOKIES['token_jwt']
        decoded = jwt.decode(encoded, 'secret', algorithms=['HS256'])
        # Test JWT
        if decoded['username'] == username:
            # here we have a good token so we are authentificated
            # return True, render(request, 'bitly_like/user.html', locals())
            return True, redirect('user space')
    except KeyError as e:
        # There is no token
        return False, None


def sign_out(request):
    logout(request)
    response = redirect('sign up')
    response.delete_cookie('username')
    response.delete_cookie('token_jwt')
    return response


def not_found(request):
    return render(request, 'bitly_like/404NotFound.html')
