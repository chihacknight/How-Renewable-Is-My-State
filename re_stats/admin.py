from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from import_export import resources
from re_stats.models import Data, Info
# Register your models here.


class DataResource(resources.ModelResource):

    class Meta:
        model = Data
        #exclude = ('id', )
        import_id_fields = ['original_row_id']
        skip_unchanged = True
        fields = ['original_row_id', 'data_status', 'msn', 'statecode', 'year','data']
        #exclude = ('id', )
        import_id_fields = ('original_row_id',)
class DataAdmin(ImportExportModelAdmin):
    resource_class = DataResource

admin.site.register(Data, DataAdmin)
admin.site.register(Info)
