from django.urls import include, path
from rest_framework import routers
from . import views
# from basespace import views

router = routers.DefaultRouter()
router.register(r'basespace', views.BSListView)
router.register(r'project', views.ProjectView)
router.register(r'biosample', views.BiosampleView)


urlpatterns = [
    path('', include(router.urls)),
    
   
]