# Full path and name to your csv file
csv_filepathname="./filtered_data.csv"
# Full path to your django project directory
your_djangoproject_home="C:\\repos\\How-Renewable-Is-My-State\\hrims"

import sys,os
sys.path.append(your_djangoproject_home)
os.environ['DJANGO_SETTINGS_MODULE'] = 'settings'

from re_stats.models import Data

import csv
dataReader = csv.reader(open(csv_filepathname), delimiter=',', quotechar='"')

for row in dataReader:
    if row[0] != 'original_row_id': # Ignore the header row, import everything else
        data = Data()
        data.original_row_id = row[0]
        data.data_status = row[1]
        data.msn = row[2]
        data.statecode = row[3]
        data.year = row[4]
        data.data = row[5]
        data.save()
