from django.urls  import path,include
from project_402.views.index import index

urlpatterns = {
    path("menu/",include("project_402.urls.index")),
    path("playgrounde/",include("project_402.urls.index")),
    path("settings/",include("project_402.urls.index")),
}