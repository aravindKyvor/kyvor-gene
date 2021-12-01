from django.http.response import HttpResponse
from django.shortcuts import render
import requests
import json
from .serializers import BaseSpaceSerializer
from rest_framework import viewsets
from .models import Basespace

class BSListView(viewsets.ModelViewSet):
    queryset = Basespace.objects.all().order_by('id')
    serializer_class = BaseSpaceSerializer