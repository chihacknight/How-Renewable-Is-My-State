# How-Renewable-Is-My-State-

python:
  - 3.6
  - DJANGO=1.10

services: postgresql


install:
  - clone from repo
  - ```pip install -r requirements.txt```

before_script:
  - ```psql -c "CREATE DATABASE django;" -U postgres```

loading data:
  - ```python ./data/load_data.py ```
- This _should_ load in the data from the flat file, not tested atm

Running:
  - ```python manage.py runserver```

Testing:
  - ```python manage.py test```
    - no tests written atm
