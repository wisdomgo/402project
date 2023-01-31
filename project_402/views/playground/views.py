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
