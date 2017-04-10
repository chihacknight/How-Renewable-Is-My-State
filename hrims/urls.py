"""hrims URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers
from re_stats import views
from rest_framework.schemas import get_schema_view
from django.views.generic.base import TemplateView


# schema_view = get_schema_view(title='data API')
router = routers.DefaultRouter()
# router.register(r'data', views.DataViewSet)
# router.register(r'info', views.InfoViewSet)
# router.register(r'mapdata', views.MapDataViewSet)
#router.register(r'map', GeoJSONLayerView.as_view(model=Map))
#router.register(r'^map.geojson$', views.Map.as_view(model=Map, properties=('statecode',)), name='map')
#router.register(r'^data.geojson$', GeoJSONLayerView.as_view(model=Map), name='map')

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    #url(r'^$', TemplateView.as_view(template_name='index.html')),
    url(r'^$', views.index, name='home'),
    # url(r'^api/', router.urls),
    url(r'^states/$', views.state_list),
    # url(r'^states/(?P<pk>[A-Z]+)/$', views.state_detail),
    url(r'^stats/(?P<state_code>[A-Z]+)/(?P<year>[0-9]+)/$', views.consumption_stats_list),
    url(r'^admin/', admin.site.urls),
    # url('^schema/$', schema_view),
    # url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    # url(r'^$', TemplateView.as_view(template_name='home.html')),
    #url(r'^data.geojson$', GeoJSONLayerView.as_view(model=Map), name='map'),
    #url(r'^map.geojson$', Map.as_view(model=Map, properties=('statecode',)), name='map'),
]
