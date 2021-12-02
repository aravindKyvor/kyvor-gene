from django.http.response import HttpResponse
from django.shortcuts import render
import requests
import json
from .serializers import BaseSpaceSerializer,ProjectSerializer,BiosampleSerializer
from rest_framework import viewsets
from .models import Basespace,Project,Biosample
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
    
    


# @api_view(["GET"])
# def home(request):
#     basespace_credentials = usercreds()
#     request_url = "https://api.basespace.illumina.com/v1pre3/applications"

#     req = requests.get(request_url, headers=basespace_credentials["headers"])
#     req_status = req.status_code
#     print(req_status)

#     if req_status == 200 or req_status == 201:
#         return HttpResponse(req)
    
    
# @api_view(["GET"])
# def home(request):
#     basespace_credentials = usercreds()
#     request_url = "https://api.basespace.illumina.com/v2/labrequeues"

#     req = requests.get(request_url, headers=basespace_credentials["headers"])
#     req_status = req.status_code
#     print(req_status)

#     if req_status == 200 or req_status == 201:
#         return HttpResponse(req)