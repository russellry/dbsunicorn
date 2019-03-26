import pandas as pd
import requests
import json


with open("trans.json", "r") as to_read:
    data = json.load(to_read)


spending = {}

for transaction in data:

    tag = transaction['tag']
    month = transaction['date'][5:7]
    amount = float(transaction['amount'])
    
    temp_dic = spending.get(month, {})
    temp_dic[tag] = round(temp_dic.get(tag, 0) + amount,2)

    spending[month] = temp_dic

with open('./data/spending_month_tag.json', 'w') as f:
    json.dump(spending, f, indent=4)
