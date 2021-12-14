from django.urls import include, path
from rest_framework import routers
from . import views 

router = routers.DefaultRouter()
router.register(r'basespace', views.BSListView)

# router.register(r'biosample', views.BiosampleView)
router.register(r'analysis', views.AnalysisView)
urlpatterns = [
    path('', include(router.urls)),
    path('applications/',views.get_application),
     path('users/',views.get_user),
     path('credits/',views.get_credits),
     path('projects/',views.getProjects),
    path('project/<str:pk>/',views.getProject),
    path('biosample/',views.getBiosamples),
  
    
   
]