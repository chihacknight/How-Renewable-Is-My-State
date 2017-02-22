from re_stats.models import Data, Info
from rest_framework import serializers

class DataSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Data
        fields = ('id','original_row_id','data_status','msn','statecode','year','data')

class InfoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Info
        fields = ('msn', 'description', 'detail')
