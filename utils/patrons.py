import sys, csv, json

print("Generating patrons.json from Eventyay.com order list csv file. Source: "+sys.argv[1])
json_out = []
with open(sys.argv[1], 'r', encoding="utf-8") as csvfile:
    datareader = csv.reader(csvfile)
    for row in datareader:
        if(row[2]=='completed' and row[5]=='Donation Ticket'):
            json_out.append({
                "name": "{} {}".format(row[15], row[16]),
                "org_and_title": "{} @ {}".format(row[20], row[18]),
                "donated_at": row[1]
            })
output = json.dumps(json_out)
with open('patrons.json', 'w', encoding="utf-8") as f:
    f.write(output)
print("Done, Check out patrons.json")
