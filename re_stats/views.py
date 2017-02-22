from re_stats.models import Data, Info
from rest_framework import viewsets
from re_stats.serializers import DataSerializer
# from django_filters.rest_framework import DjangoFilterBackend
# from rest_framework import filters
# from rest_framework import generics


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
    view metadata
    """
    queryset = Info.objects.all()
    serializer_class = InfoSerializer
    # filter_backends = (filters.DjangoFilterBackend)
    filter_fields = ('msn', 'description', 'detail')
