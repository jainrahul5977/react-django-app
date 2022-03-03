from rest_framework import serializers
from django.contrib.auth.models import User
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from .models import Persion ,  Profile1




class UserSerializer(serializers.ModelSerializer):
    class Meta :
        model = User
        fields =(
            'username','email','password'
        )



class LoginSerializer(serializers.ModelSerializer):
    class Meta :
        model = User
        fields =(
            'username','password'
        )

class PersionSerializer(serializers.ModelSerializer):
    class Meta :
        model = Persion
        fields ="__all__"




class ProfileSerializer(serializers.ModelSerializer):
    class Meta :
        model = Profile1
        fields ="__all__"



@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)