import sys, csv, json

print("Generating confirmed_sessions.json from Eventyay.com sessions list csv file. Source: "+sys.argv[1])
json_out = []
with open(sys.argv[1], 'r', encoding="utf-8") as csvfile:
    datareader = csv.reader(csvfile)
    for row in datareader:
        if("(confirmed)" in row[0]):
            json_out.append({
                "title": row[0],
                "speakers": row[3],
                "type": row[13],
                "lang": row[15]
            })
output = json.dumps(json_out)
with open('confirmed_sessions.json', 'w', encoding="utf-8") as f:
    f.write(output)
print("Done, Check out confirmed_sessions.json")