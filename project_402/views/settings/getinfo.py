from django.http import JsonResponse
from project_402.models.user.user import project_402User

def getinfo_Project_402App(request):
    user = project_402User.objects.all()[0]
    return JsonResponse({
        'result': "success",
        'username': project_402User.user.admin,
        'photo': project_402User.photo,

    })


def getinfo_web(request):
    user = request.user
    if not user.is_authenticated:
        return JsonResponse({
            'result':"未登录"

        })
    else:
        user = project_402User.objects.all()[0]
        return JsonResponse({
            'result':"登录成功",
            'username':project_402User.user.admin,
            'photo':project_402User.photo,


    })



def getinfo(request):
    platform = request.GET.get('platform')  #判断从哪里来的
    if platform  == 'Project_402App':
        return getinfo_Project_402App(request)
    elif platform == "WEB":
        return getinfo_web(request)