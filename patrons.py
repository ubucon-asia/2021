import sys, csv, json

print("Generating patrons.json from Eventyay.com order list csv file. Source: "+sys.argv[1])
json_out = []
with open(sys.argv[1], 'r') as csvfile:
    datareader = csv.reader(csvfile)
    for row in datareader:
        if(row[2]=='completed' and row[3]=='paypal' and float(row[5]) >= 50):
            json_out.append({
                "name": "{} {}".format(row[8], row[9]),
                "donated_at": row[1]
            })
output = json.dumps(json_out)
with open('patrons.json', 'w') as f:
    f.write(output)
print("Done, Check out patrons.json")
