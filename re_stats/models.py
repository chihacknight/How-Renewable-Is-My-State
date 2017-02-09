from django.db import models

class DataByYear(models.Model):
    year = models.IntegerField()
    coal = models.IntegerField()
    natural_gas = models.IntegerField()
    petroleum = models.IntegerField()
    nuclear = models.IntegerField()
    fuel_ethanol_production_losses = models.IntegerField()
    fuel_ethanol = models.IntegerField()
    geothermal = models.IntegerField()
    hydropower = models.IntegerField()
    solar = models.IntegerField()
    wood_and_waste = models.IntegerField()
    wind = models.IntegerField()
    international_imports = models.IntegerField()
    interstate_imports_exports = models.IntegerField()

class State(models.Model):
    state_full_name = models.CharField(max_length=50)
    state_abbrev_name = models.CharField(max_length=50)
    state_geometry = models.CharField(max_length=50)
    state_data_by_year = models.ForeignKey(DataByYear, on_delete=models.CASCADE)
