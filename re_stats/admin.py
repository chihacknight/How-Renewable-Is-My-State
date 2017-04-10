from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from import_export import resources
from re_stats.models import State, ConsumptionByYear
# Register your models here.

admin.site.register(State)
admin.site.register(ConsumptionByYear)
