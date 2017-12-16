from django.conf.urls import url, include
from rest_framework import serializers, viewsets, routers

from . import views
from .models import BitLink


class BitLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = BitLink
        fields = '__all__'


###### View Set for API
class BitLinkViewSet(viewsets.ModelViewSet):
    queryset = BitLink.objects.all()
    serializer_class = BitLinkSerializer


# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'/users', BitLinkViewSet)

urlpatterns = [
    url(r'^$', views.home, name="home"),
    # url(r'', views.not_found),
    url(r'^sign_in$', views.sign_in, name="sign in"),
    url(r'^user$', views.user_space, name='user space'),
    url(r'^sign_up$', views.sign_up, name="sign up"),
    url(r'^sign_out$', views.sign_out, name="sign out"),
    url(r'^reduce_link$', views.reduce_link, name="reduce link"),
    url(r'^bit_links', include(router.urls)),
    url(r'(.*)', views.get_link, name="call api")
]
