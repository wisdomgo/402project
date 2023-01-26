from django.urls import path
from project_402.views import index

urlpatterns = {
    path("",index,name = "index"),
}