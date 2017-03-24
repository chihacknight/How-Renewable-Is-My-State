import os, django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "hrims.settings")
django.setup()

from re_stats.models import MapData
import csv

csv_filepathname="./data/map_data.csv"

with open(csv_filepathname) as f:
    dataReader = csv.reader(f, delimiter=',', quotechar='"')

    for row in dataReader:
        if row[0] != 'statecode': # Ignore the header row, import everything else
            data = MapData()
            data.statecode = row[0]
            data.year = row[1]
            data.re_over_te = row[2]
            data.save()
