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
