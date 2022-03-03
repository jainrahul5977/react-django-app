from django.shortcuts import render
from random import randrange
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
import json
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import JSONParser,MultiPartParser
#from rest_framework.permissions import IsAuthenticated
from .serializers import UserSerializer , LoginSerializer, PersionSerializer ,ProfileSerializer
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from django.core.mail import send_mail
from .models import Persion , Profile1

# Create your user here.
class RegisterView(APIView):
    parser_classes = (MultiPartParser,JSONParser)
    #permission_classes = (IsAuthenticated, )

    def post(self, request,*args, **kwargs):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            data = request.data
            user = User.objects.create_user(data['username'], data['email'], data['password'])
            user.save()
            token = Token.objects.get_or_create(user=user)
            return Response("user registration completed.")
        return Response(serializer.errors)
        #return Response({'received data': request.data})


class UserDataView(APIView):
    def post(self, request, *args, **kwargs):
        user_id = Token.objects.get(key=request.data['token']).user_id
        userdata = User.objects.filter(id = user_id).values("id" , "username" , "email")
        # values("user_id" , "user__username" , "user__email")
        return Response(list(userdata)[0])

        return Response({'token': token.key, 'id': token.user_id})




class loginView(APIView):
    parser_classes = (MultiPartParser,JSONParser)
    #permission_classes = (IsAuthenticated, )
    def post(self, request,*args, **kwargs):
        data = request.data
        # user = User.objects.create_user(data['username'], data['email'], data['password'])
        # user = authenticate(username=data['username'],password =  data['password'])
        # if user is not None:



        try:
            # user = User.objects.get(username=data['username'])
            user = authenticate(username=data["username"], password=data["password"])
            if user:
                token, created = Token.objects.get_or_create(user=user)
                return Response( token.key)
                #return Response("login Successfull")
                
            else:
                return Response("please insert the correct password.")

                pass
        except User.DoesNotExist:
            return Response("please insert the correct username. ")
            pass
        
 
class forgetpassView(APIView):
    parser_classes = (MultiPartParser,JSONParser)
    #permission_classes = (IsAuthenticated, )
    def post(self, request,*args, **kwargs):
        #serializer = UserSerializer(data=request.data)
        data=request.data
        try:
            user = User.objects.get(username=data['username'])
            passwords= randrange(100000,999999)
            user.set_password(str(passwords))
            user.save()
            subject="new password"
            message = str(passwords)
            from_email= "rahul.belgium.webnet@gmail.com"
            return Response(json.dumps(passwords))
            #to_email = data['email']
            #send_mail(subject, message, from_email, recipient_list, fail_silently=False, auth_user=None, auth_password=None, connection=None, html_message=None)¶
            #user.email_user(subject, message, from_email=None, **kwargs)
        except User.DoesNotExist:
            return Response("please insert the correct username. ")
            pass

    
        # if serializer.is_valid():
        #     data = request.data
        #     #user = User.objects.create_user(data['username'], data['email'], data['password'])
        #     user = authenticate(username=data['username'],password =  data['password'])
        #     if user is not None:
        #         return Response(serializer.data)
        #     return render("user credential ar not correct.")
        # return Response(serializer.errors)

    
    

class deleteView(APIView):
    parser_classes = (MultiPartParser,JSONParser)
    #permission_classes = (IsAuthenticated, )
    def post(self, request,*args, **kwargs):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            data = json.load(request.data)
            #user = User.objects.create_user(data['username'], data['email'], data['password'])
            user = authenticate(username=data['username'],password =  data['password'])
            if user is not None:
                return Response(serializer.data)
            return render("user credential ar not correct.")
        return Response(serializer.errors)



 
class updatesView(APIView):
    parser_classes = (MultiPartParser,JSONParser)
    def post(self, request, *args, **kwargs):
        user = User.objects.get(username=request.data['user'])
        data = request.data
        data['user'] = user.id
        serializer = ProfileSerializer(data = data)
        if serializer.is_valid():
            try:
                if user :
                    # profile = Profile1.objects.get(user=user)
                    # if profile is not None:
                    #     profile.country= serializer.data["country"]
                    #     profile.state= serializer.data["state"]
                    #     profile.city= serializer.data["city"]
                    #     profile.street= serializer.data["street"]
                    #     profile.pin_code= serializer.data["pin_code"]
                    #     profile.country_code= serializer.data["country_code"]
                    #     profile.phone= serializer.data["phone"]
                    #     profile.picture= serializer.data["picture"]
                    #     profile.save()
                    #     return Response("Profile is updated")
                    # else:
                        #user = User.objects.get(user=Token.objects.get(oken=data['token']).user)
                        #instance = Token.objects.get(key=data['token']).user
                            #instance = user.get_object()
                            # instance.first_name = request.data.get("firstname")
                            # instance.last_name = request.data.get("lastname")
                            # instance.save()
                            #serializer.data["user"]=user.user_id
                            serializer.save()
                            #token, created = Token.objects.get_or_create(user=instance)
                            return Response("profile is uploaded.")
                else:
                    return Response("user doesn't exist.")

            except :
                return Response("updation is failed.")
        return Response(serializer.errors)



 
class updateView(APIView):
    parser_classes = (MultiPartParser,JSONParser)
    def post(self, request, *args, **kwargs):
        try:
            user = User.objects.get(username=request.data['user'])
            if user :
                data = request.data
                data['user'] = user.id
                serializer = ProfileSerializer(data = data)
                if serializer.is_valid():
                    serializer.save()
                    return Response("profile is uploaded.")
                        # profile = Profile1.objects.get(user=user)
                        # if profile is not None:
                        #     
                else:
                    profile = Profile1.objects.get(user=user)
                    profile.country= data["country"]
                    profile.state= data["state"]
                    profile.city= data["city"]
                    profile.street= data["street"]
                    profile.pin_code= data["pin_code"]
                    profile.country_code= data["country_code"]
                    profile.phone= data["phone"]
                    profile.picture= data["picture"]
                    profile.save()
                    return Response("Profile is updated")
                            #user = User.objects.get(user=Token.objects.get(oken=data['token']).user)
                            #instance = Token.objects.get(key=data['token']).user
                                #instance = user.get_object()
                                # instance.first_name = request.data.get("firstname")
                                # instance.last_name = request.data.get("lastname")
                                # instance.save()
                                #serializer.data["user"]=user.user_id
                                
                                #token, created = Token.objects.get_or_create(user=instance)
                                #return Response("profile is uploaded.")
            else:
                return Response("user doesn't exist.")

        except :
            return Response("updation is failed.")
        



class CustomAuthToken(APIView):
#obtainauth token
    def post(self, request, *args, **kwargs):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid()
        data=request.data
        user = User.objects.get(username=data['username'])
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email
        })


class PersionView(APIView):
    parser_classes = (MultiPartParser,JSONParser)
    #permission_classes = (IsAuthenticated, )

    def post(self, request,*args, **kwargs):
        serializer = PersionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            #token = Token.objects.get_or_create(persion = )
            return Response("persion registration completed.")
        return Response(serializer.errors)



class UpdatepersionView(APIView):
    parser_classes = (MultiPartParser,JSONParser)
    #permission_classes = (IsAuthenticated, )
    def post(self, request,*args, **kwargs):
        #serializer = UserSerializer(data=request.data)
        data=request.data
        try:
            persion = Persion.objects.get(username=data['username'])
            persion.picture = data["picture"]
            persion.save()
            return Response("successfully updated")
        except : 
            return Response("error in uploading image")