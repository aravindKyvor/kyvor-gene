from rest_framework import serializers
from .models import Basespace

class BaseSpaceSerializer(serializers.ModelSerializer):
    class Meta:
        model=Basespace
        fields='__all__'