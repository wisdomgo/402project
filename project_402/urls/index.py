from django.urls  import path,include
from project_402.views.settings.getinfo import getinfo

urlpatterns = {
    path("",index,name = 'index'),
    path("menu/",include("project_402.urls.index")),
    path("playgrounde/",include("project_402.urls.index")),
    path("settings/",include("project_402.urls.index")),
    path("getinfo/",getinfo,name = 'settings_getinfo'),
}