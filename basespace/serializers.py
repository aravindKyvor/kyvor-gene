from rest_framework import serializers
from .models import Basespace,Project,Biosample,AnalysisStatus

class BaseSpaceSerializer(serializers.ModelSerializer):
    class Meta:
        model=Basespace
        fields='__all__'
        
        
        
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model=Project
        fields='__all__'
        
class BiosampleSerializer(serializers.ModelSerializer):
    class Meta:
        model=Biosample
        fields='__all__'
        
        
        
        
class AnalysisSerializer(serializers.ModelSerializer):
    class Meta:
        model=AnalysisStatus
        fields='__all__'