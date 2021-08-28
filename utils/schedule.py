import sys
import csv
import datetime
import os
import re


# function that slugifies a string
def slugify(input_string):
    cleaned_string = input_string.strip().lower().replace(" ", "_").replace("-", "_")
    return re.sub(r'[^A-Za-z0-9_]+', '', cleaned_string)
    # return re.sub(r'\W+', '', string.lower())


session_markdown_template = """---
title: >
    {}
date: {}
end: {}
track: 0
featured: false # If it's true. This session will appear on main page.
speakers: # Speaker info
    - name: {}
      bio: 
      email: {} # Email
      launchpad: # link to launchpad.net profile
      github: # link to github profile
      profile: "sessions/<session-item-dir>/<photo-file>" # Speaker photo
      linkurl: # Other website link url
      linklabel: # Label for linkurl
---
{}

{}
"""
time_parse_format = "%B %d, %Y %H:%M %z"
print(
    "Generating session markdown files from Eventyay.com sessions list csv file. Source: "+sys.argv[1])
os.mkdir("sessions")
with open(sys.argv[1], 'r', encoding="utf-8") as csvfile:
    datareader = csv.reader(csvfile)
    for row in datareader:
        if("(confirmed)" in row[0]):
            session_dir_name = slugify(row[0].replace("(confirmed)", ""))
            os.mkdir("sessions/"+session_dir_name)
            cleaned_title = row[0].replace("(confirmed)", "")
            session_start = datetime.datetime.strptime(row[1], time_parse_format)
            duration = row[14].split(":")
            session_content = session_markdown_template.format(
                cleaned_title,
                session_start.isoformat(),
                (session_start+datetime.timedelta(hours=int(duration[0]), minutes=int(duration[1]))).isoformat(),
                row[3],
                row[4],
                row[6],
                row[8]
            )
            with open("sessions/"+session_dir_name+'/index.md', 'w', encoding="utf-8") as f:
                f.write(session_content)
print("Done, Check out sessopms dir")
