# from re_stats.models import Data, Info, MapData
from re_stats.models import State, ConsumptionByYear
from rest_framework import serializers

# class DataSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = Data
#         fields = ('id','original_row_id','data_status','msn','statecode','year','data')
#
# class InfoSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = Info
#         fields = ('msn', 'description', 'detail')
#
# class MapDataSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = MapData
#         fields = ('id','statecode','year','re_over_te')
class ConsumptionByYearSerializer(serializers.Serializer):
    class Meta:
        model = ConsumptionByYear
        fields = ( 'state', 'state_rank', 'year', 'last_updated', 'total_energy_consumption', 'fossil_fuels_total_consumption', 'coal_total_consumption', 'natural_gas_total_consumption', 'petroleum_total_consumption', 'nuclear_total_consumption', 'renewable_energy_total_consumption', 'fuel_ethanol_production_losses', 'fuel_ethanol_total_consumption', 'geothermal_total_consumption', 'hydropower_total_consumption', 'solar_total_consumption', 'wood_and_waste_total_consumption', 'wind_total_consumption', 'net_international_imports', 'net_interstate_imports')

class StateSerializer(serializers.HyperlinkedModelSerializer):
    stats = ConsumptionByYearSerializer(many=True)

    class Meta:
        model = State
        fields = ('state_code', 'state_name', 'stats')
