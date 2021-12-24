from django.urls import include, path
from rest_framework import routers
from . import views 

router = routers.DefaultRouter()
router.register(r'basespace', views.BSListView)


urlpatterns = [
    path('', include(router.urls)),
    path('applications/',views.get_application),
     path('users/',views.get_user),
     path('credits/',views.get_credits),
     path('projects/',views.getProjects),
     path('new/projects/',views.get_NewProjects),
    path('project/<str:pk>/',views.getProject),
    path('biosample/',views.getBiosample),
     path('biosamples/<str:pk>/',views.getBiosamples),
     path('analysis/',views.get_analysis),
  
  
    
   
]