from django.urls import path 
from rest_framework.authtoken import views
from .views import RegisterView,loginView, forgetpassView,updateView,CustomAuthToken,PersionView,UpdatepersionView , UserDataView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('',RegisterView.as_view(), name= " user registration"),
    path('user',UserDataView.as_view(), name= " user registration"),
    path('login/', loginView.as_view(), name="user login" ),
    path('forgetpass',forgetpassView.as_view(), name="forget password" ),
    path('updateuser', updateView.as_view(), name="update the user profile"),
    path('updatepersion', PersionView.as_view(), name="update the persion profile"),
    path('updatepersionprofile', UpdatepersionView.as_view(), name="update the persion profile picture"),
    path('api-token-auth', CustomAuthToken.as_view())
]+static(settings.MEDIA_URL,document_root = settings.MEDIA_ROOT)
