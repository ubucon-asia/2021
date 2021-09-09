# Data utils

Here, you find some util scripts written in python that generates `json` data from `csv` file exported from eventyay.
You may put generated `json` file in `data/` directory to update data displayed on the website.

## `patrons.py`
Generates list of individual patron `json` file from ticker order list `csv` data. Which can be downloaded from eventyay's *View attendees* screen

```python
python patrons.py orders.csv
```

## `confirmed_sessions.py`
Generates list of confirmed sessions `json` file from session list `csv` data. Which can be downloaded from eventyay's *Sessions* screen

```python
python confirmed_sessions.py sessions.csv
```