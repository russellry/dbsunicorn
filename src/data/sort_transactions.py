from get_data import read_json, write_json
from datetime import datetime, timedelta

PART_OF_DAY = ["midnight", "morning", "afternoon", "evening"]


def get_part_of_day(dtobj):
    hr = dtobj.hour
    if hr >= 0 and hr < 8:
        return PART_OF_DAY[0]
    elif hr >= 8 and hr < 12:
        return PART_OF_DAY[1]
    elif hr >= 12 and hr < 18:
        return PART_OF_DAY[2]
    else:
        return PART_OF_DAY[3]


def sort_transaction(data):
    """ list of transaction in dict, return dict of sorted transations """

    res = dict()
    for p in PART_OF_DAY:
        res[p] = dict()
    for t in data:
        datestr = t["date"]
        tag = t['tag']
        amount = round(float(t["amount"]), 2)

        dateobj = datetime.strptime(datestr, "%Y-%m-%dT%H:%M:%S.%f%z")
        part_of_day = get_part_of_day(dateobj)

        # tag
        if tag in res[part_of_day].keys():
            res[part_of_day][tag] += amount
        else:
            res[part_of_day][tag] = amount

    return res


def sort_transaction_by_cat(data):
    """ list of transaction in dict, return dict of sorted transations """

    res = dict()
    for t in data:
        tag = t['tag']
        amount = round(float(t["amount"]), 2)

        # tag
        if tag in res.keys():
            res[tag] += amount
        else:
            res[tag] = amount

    return res


def test():
    data = read_json('personal_data.json')
    transaction_sample = data["2"]["debitAccounts"]["74"]["transactions"]
    res = sort_transaction(transaction_sample)
    write_json("marytan_past_transactions_sorted.json", res)
    res2 = sort_transaction_by_cat(transaction_sample)
    write_json("mary_tan_transactions_by_tag.json", res2)

if __name__ == '__main__':
    test()
