from re_stats.models import Data
from rest_framework import serializers

class DataSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Data
        fields = ('id','original_row_id','data_status','msn','statecode','year','data')
