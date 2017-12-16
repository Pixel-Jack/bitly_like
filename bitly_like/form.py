from django import forms
from django.contrib.auth.models import User
from django.forms import URLInput, PasswordInput

from .models import BitLink


class BitLinkForm(forms.ModelForm):
    class Meta:
        model = BitLink
        fields = ('link',)

    def __init__(self, *args, **kwargs):
        super(BitLinkForm, self).__init__(*args, **kwargs)
        self.fields['link'].widget = URLInput(attrs={
            'id': 'shorten_url',
            'class': 'shorten-input',
            'name': 'myCustomName',
            'placeholder': 'Paste a link to shorten it',
            'taborder': '1',
            'name': 'url',
            'autocomplete': 'off',
            'autocorrect': 'off',
        })


class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ('username', 'email', 'password')
        widgets = {
            'password': PasswordInput
        }


class ConnexionForm(forms.Form):
    username = forms.CharField(label="Username", max_length=30)
    password = forms.CharField(label="Password", widget=forms.PasswordInput)
