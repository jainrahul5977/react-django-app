from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Persion(models.Model):
    username = models.CharField(max_length=100)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField()
    picture = models.ImageField(upload_to = "mypicture",blank = True)

class Profile1(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE,unique=True)
    country = models.CharField(max_length=100)
    state = models.CharField(max_length=30)
    city = models.CharField(max_length=30)
    street = models.CharField(max_length=100)
    pin_code = models.IntegerField()
    country_code = models.IntegerField()
    phone = models.IntegerField()
    picture = models.ImageField(upload_to = "mypicture",blank = True)
    
