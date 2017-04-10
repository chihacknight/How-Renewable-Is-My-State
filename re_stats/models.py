from django.db import models

class State(models.Model):
    state_code = models.CharField(max_length=2, primary_key=True)
    state_name = models.CharField(max_length=32)

    def __str__(self):
        return self.state_code

class ConsumptionByYear(models.Model):
    state = models.ForeignKey(State, on_delete=models.CASCADE)
    state_rank = models.IntegerField()
    year = models.IntegerField()
    last_updated = models.DateField('Date data was last updated')

    total_energy_consumption = models.FloatField()

    fossil_fuels_total_consumption = models.FloatField()
    coal_total_consumption = models.FloatField()
    natural_gas_total_consumption = models.FloatField()
    petroleum_total_consumption = models.FloatField()

    nuclear_total_consumption = models.FloatField()

    renewable_energy_total_consumption = models.FloatField()
    fuel_ethanol_production_losses = models.FloatField()
    fuel_ethanol_total_consumption = models.FloatField()
    geothermal_total_consumption = models.FloatField()
    hydropower_total_consumption = models.FloatField()
    solar_total_consumption = models.FloatField()
    wood_and_waste_total_consumption = models.FloatField()
    wind_total_consumption = models.FloatField()

    net_international_imports = models.FloatField()
    net_interstate_imports = models.FloatField()

    def __str__(self):
        return (str(self.state.state_name) + ' ' + str(self.year))

    class Meta:
        ordering = ['year']
