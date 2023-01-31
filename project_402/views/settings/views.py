from django.views import View
from django import http
import json
from api.models import UserInfo, UserDetailInfo, RecordsInfo, KeyInfo
from rest_framework import viewsets
from rest_framework import generics
from . import models
from . import serializers
from drf_yasg.utils import swagger_auto_schema
from rest_framework.views import APIView


class UserInfoView(APIView):
    def getinformation(self,requeset):

        users = UserInfo.objects.all()
        #用户信息

        user_list = []
        for user in users:
            user_dict = {
                "id":user.id,
                "username":user.username,
                "password":user.password,
                "certification":user.certification
            }
        user_list.append(user_dict)

        return  http.JsonResponse(user_list,safe = False)



    def createuser(self,request):
        data = json.loads(request.body.decode())
        username = data.getinformation("username")
        password = data.getinformation("password")

        user = UserInfo.objects.create(**createuser())

        user_data = {
            "id":user.id,
            "username":user.username,
            "password":user.password,
        }
        return  http.JsonResponse(user_data,status = 201)