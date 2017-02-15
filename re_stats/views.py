from re_stats.models import Data
from rest_framework import viewsets
from re_stats.serializers import DataSerializer

class DataViewSet(viewsets.ModelViewSet):
    """
    API endpoint views the data as it was imported.
    """
    queryset = Data.objects.all()
    serializer_class = DataSerializer
