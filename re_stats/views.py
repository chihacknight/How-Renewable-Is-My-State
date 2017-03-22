from re_stats.models import Data, Info, MapData
from rest_framework import viewsets
from re_stats.serializers import DataSerializer, InfoSerializer, MapDataSerializer
# from django_filters.rest_framework import DjangoFilterBackend
# from rest_framework import filters
# from rest_framework import generics
from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')


class DataViewSet(viewsets.ModelViewSet):
    """
    API endpoint views the data as it was imported.
    """
    queryset = Data.objects.all()
    serializer_class = DataSerializer
    # filter_backends = (filters.DjangoFilterBackend)
    filter_fields = ('msn', 'year', 'statecode')

class InfoViewSet(viewsets.ModelViewSet):
    """
    view metadata that describes each data point
    """
    queryset = Info.objects.all()
    serializer_class = InfoSerializer
    # filter_backends = (filters.DjangoFilterBackend)
    filter_fields = ('msn', 'description', 'detail')

class MapViewSet(viewsets.ModelViewSet):
    """
    API endpoint showing total renewable over total energy
    """
    queryset = MapData.objects.all()
    serializer_class = MapDataSerializer
    # filter_backends = (filters.DjangoFilterBackend)
    filter_fields = ('re_over_te', 'year', 'statecode')
