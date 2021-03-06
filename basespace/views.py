from django.http.response import HttpResponse,JsonResponse
from django.shortcuts import render
import requests
from .forms import ApplicationForm
import json
from .serializers import BaseSpaceSerializer,ProjectSerializer,BiosampleSerializer,AnalysisSerializer
from rest_framework import viewsets, generics
from .models import Basespace,Project,Biosample,AnalysisStatus
from .pipeline.basespace import usercreds
from rest_framework.decorators import api_view
from .utils import *
import os     
print(os.getcwd())     
class BSListView(viewsets.ModelViewSet):
    queryset = Basespace.objects.all().order_by('bs_user_id')
    serializer_class = BaseSpaceSerializer

    
# class BiosampleView(viewsets.ModelViewSet):
#     queryset = Biosample.objects.all().order_by('id')
#     serializer_class = BiosampleSerializer
    
    
# class AnalysisView(viewsets.ModelViewSet):
#     queryset = AnalysisStatus.objects.all().order_by('id')
#     serializer_class = AnalysisSerializer
  
    
    
@api_view(['GET'])
def get_application(request):
    basespace_credentials = usercreds()
    request_url = "https://api.basespace.illumina.com/v1pre3/applications/"

    req = requests.get(request_url, headers=basespace_credentials["headers"])
    req_status = req.status_code
    print(req_status)
    print(os.getcwd())
    
    

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







@api_view(['GET', 'POST'])
def getProjects(request):

    if request.method == 'GET':
        print(getProjectsList)
        return getProjectsList(request)

    if request.method == 'POST':
        return createProject(request)


@api_view(['GET', 'PUT', 'DELETE'])
def getProject(request, pk):

    if request.method == 'GET':
        return getProjectDetail(request, pk)

    if request.method == 'PUT':
        return updateProject(request, pk)

    if request.method == 'DELETE':
        return deleteProject(request, pk)
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
@api_view(['GET', 'POST'])
def getBiosample(request):

    if request.method == 'GET':
        print(get_biosample)
        return get_biosample(request)

    if request.method == 'POST':
        return createBiosamples(request)
    
    
@api_view(['GET', 'PUT', 'DELETE'])
def getBiosamples(request, pk):

 
    if request.method=='GET':
        return getBiosampleDetail(request,pk)
    if request.method == 'PUT':
        return updateBiosample(request, pk)

    if request.method == 'DELETE':
        return deleteBiosample(request, pk)
    
    
    
    
    
    
@api_view(['GET'])
def get_NewProjects(request):
    basespace_credentials = usercreds()
    request_url = "https://basespace.illumina.com/v2/users/276714439/projects/"

    req = requests.get(request_url, headers=basespace_credentials["headers"])
    req_status = req.status_code
    print(req_status)
    print(os.getcwd())
    
    

    if req_status == 200 or req_status == 201:
        
        return JsonResponse(req.json())
    
    
    
    
@api_view(['GET'])
def get_analysis(request):
    basespace_credentials = usercreds()
    request_url = "https://api.basespace.illumina.com/v1pre3/users/current/appsessions/"

    req = requests.get(request_url, headers=basespace_credentials["headers"])
    req_status = req.status_code

    if req_status == 200 or req_status == 201:
        print(req.json())
        return JsonResponse(req.json())