import requests
import json


IDENTITY = "Group3"
TOKEN = "41ae9f00-7900-4b4a-a5e9-8d8482d1e89e"
USERNAME = ['marytan', 'limzeyang']
BASE = 'http://api-gateway-dbs-techtrek.ap-southeast-1.elasticbeanstalk.com'
START_DATE = "01-01-2018"
END_DATE = "01-31-2019"


def read_json(file):
    with open(file, 'r') as f:
        data = json.load(f)

    return data


def write_json(file_path, data, indent=4):
    with open(file_path, 'w+') as f:
        json.dump(data, f, indent=indent)


def get_request(url, identity=IDENTITY, token=TOKEN):
    r = requests.get(url=url, headers={"identity": IDENTITY, "token": TOKEN})
    if r.status_code == 200:
        return r.json()
    else:
        print("Error: " + str(r.status_code))
        print(url)
        return None


def get_customer_id(username):
    url = BASE + '/customers/' + username
    data = get_request(url)
    if data is not None:
        return data


def get_customer_details(customerId):
    url = "{}/customers/{}/details".format(BASE, customerId)
    data = get_request(url)
    if data is not None:
        return data


def get_deposit_accounts(customerId):
    url = "{}/accounts/deposit/{}".format(BASE, customerId)
    data = get_request(url)
    if data is not None:
        return data


def get_credit_accounts(customerId):
    url = url = "{}/accounts/credit/{}".format(BASE, customerId)
    data = get_request(url)
    if data is not None:
        return data


def get_transaction_details(accountId, start_date=START_DATE, end_date=END_DATE):

    url = "{}/transactions/{}?from={}&to={}".format(BASE, accountId, start_date, end_date)

    data = get_request(url)
    if data is not None:
        return data


def get_balance(accountId, month=None, year=None):
    url = "{}/accounts/deposit/{}/balance".format(BASE, accountId)
    if month is not None or END_DATE is not None:
        url += "?"
        if month is not None:
            url += "month={}".format(month)
        elif year is not None:
            if len(url) > 0:
                url += "&"
            url += "year={}".format(year)

    data = get_request(url)
    if data is not None:
        return data


def get_outstading_balance(accountId):
    url = "{}/accounts/credit/{}/balance".format(BASE, accountId)
    data = get_request(url)
    if data is not None:
        return data


def get_marketing_msg_list():
    url = "{}/marketing".format(BASE)
    data = get_request(url)
    if data is not None:
        return data


def get_personal_msg(customerId):
    url = "{}/message/{}".format(BASE, customerId)
    data = get_request(url)
    if data is not None:
        return data


# def get_marketing_data():
#     data = dict()
#     marketing_msg_lst = get_marketing_msg_list()
#     for msg in marketing_msg_lst:
#         messageId = msg['messageId']



def get_personal_data():
    full_data = dict()
    # id
    for username in USERNAME:
        print(username)
        res = dict()
        userid_json = get_customer_id(username)
        customerId = userid_json['customerId']
        res[customerId] = dict()
        res[customerId] = userid_json

        custDetails = get_customer_details(customerId)
        res[customerId].update(custDetails)

        debitAccounts = get_deposit_accounts(customerId)
        res[customerId]['debitAccounts'] = dict()
        for i, content in enumerate(debitAccounts):
            accountId = content['accountId']
            res[customerId]['debitAccounts'][accountId] = content

            res[customerId]['debitAccounts'][accountId]['balance'] = get_balance(accountId)
            res[customerId]['debitAccounts'][accountId]["transactions"] = get_transaction_details(accountId)

        creditAccounts = get_credit_accounts(customerId)
        res[customerId]['creditAccounts'] = dict()
        for i, content in enumerate(creditAccounts):
            accountId = content['accountId']
            res[customerId]['creditAccounts'][accountId] = content

            res[customerId]['creditAccounts'][accountId]['outstanding_balance'] = get_outstading_balance(accountId)

        res[customerId]['message'] = get_personal_msg(customerId)
        full_data.update(res)

    return full_data

if __name__ == '__main__':
    personal_data = get_personal_data()
    write_json('personal_data.json', personal_data)
 
