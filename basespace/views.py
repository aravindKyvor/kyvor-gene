from django.http.response import HttpResponse,JsonResponse
from django.shortcuts import render
import requests
from .forms import ApplicationForm
import json
from .serializers import BaseSpaceSerializer,ProjectSerializer,BiosampleSerializer,AnalysisSerializer
from rest_framework import viewsets
from .models import Basespace,Project,Biosample,AnalysisStatus
from .pipeline.basespace import usercreds
from rest_framework.decorators import api_view

class BSListView(viewsets.ModelViewSet):
    queryset = Basespace.objects.all().order_by('id')
    serializer_class = BaseSpaceSerializer
    
    
    
class ProjectView(viewsets.ModelViewSet):
    queryset = Project.objects.all().order_by('id')
    serializer_class = ProjectSerializer
    
    
    
class BiosampleView(viewsets.ModelViewSet):
    queryset = Biosample.objects.all().order_by('id')
    serializer_class = BiosampleSerializer
    
    
class AnalysisView(viewsets.ModelViewSet):
    queryset = AnalysisStatus.objects.all().order_by('id')
    serializer_class = AnalysisSerializer
    
    
@api_view(['GET'])
def get_application(request):
    basespace_credentials = usercreds()
    request_url = "https://api.basespace.illumina.com/v1pre3/applications/"

    req = requests.get(request_url, headers=basespace_credentials["headers"])
    req_status = req.status_code
    
    

    if req_status == 200 or req_status == 201:
        
        return JsonResponse(req.json())
    
    
    
    
@api_view(['GET'])
def get_user(request):
    basespace_credentials = usercreds()
    request_url = "https://api.basespace.illumina.com/v1pre3/users/current/"

    req = requests.get(request_url, headers=basespace_credentials["headers"])
    req_status = req.status_code
    
    

    if req_status == 200 or req_status == 201:
        
        return JsonResponse(req.json())



@api_view(['GET'])
def get_credits(request):
    basespace_credentials = usercreds()
    request_url = "https://api.basespace.illumina.com/v2/users/current/subscription/"

    req = requests.get(request_url, headers=basespace_credentials["headers"])
    req_status = req.status_code
    
    

    if req_status == 200 or req_status == 201:
        
        return JsonResponse(req.json())
