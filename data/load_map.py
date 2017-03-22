import os, django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "hrims.settings")
django.setup()

from re_stats.models import Map
import csv

csv_filepathname="./data/states1.csv"

with open(csv_filepathname) as f:
    dataReader = csv.reader(f, delimiter=',', quotechar='"')

    for row in dataReader:
        if row[0] != 'fid': # Ignore the header row, import everything else
            data = Map()
            data.fid =row[0]
            data.geometry =row[1]
            data.coordinates =row[2]
            data.statecode =row[3]
            data.state_label =row[4]
            data.ALAND10 =row[5]
            data.AWATER10 =row[6]
            data.INTPTLAT10 =row[7]
            data.INTPTLON10 =row[8]
            data.save()
