from re_stats.models import Data, Info, MapData, Map
from rest_framework import serializers
from djgeojson.serializers import Serializer as GeoJSONSerializer

class DataSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Data
        fields = ('id','original_row_id','data_status','msn','statecode','year','data')

class InfoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Info
        fields = ('msn', 'description', 'detail')

class MapDataSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = MapData
        fields = ('id','statecode','year','re_over_te')

class MapSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Map
        fields = ('fid','geometry','coordinates','statecode','state_label','ALAND10','AWATER10','INTPTLAT10','INTPTLON10')
