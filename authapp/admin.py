from django.contrib import admin
from .models import Persion, Profile1




# Register your models here.
class PersionAdmin(admin.ModelAdmin):
    list_display = ['username','first_name','last_name','email','picture']


admin.site.register(Persion,PersionAdmin)



class ProfilenAdmin(admin.ModelAdmin):
    list_display = ['user','picture','country', 'state', 'city','street', 'country_code', 'pin_code','phone' ]


admin.site.register(Profile1,ProfilenAdmin)