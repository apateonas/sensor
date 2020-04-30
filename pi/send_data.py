import json
import requests
import urllib
import pathlib

CONFIG_PATH = pathlib.Path(__file__).parent.absolute() / "config.json"

def send_data(data_json):
    # load config
    with open(CONFIG_PATH, "r") as read_file:
        config = json.load(read_file)

    # data to be sent to api 
    data = {'api_dev_key':config['PASTEBIN_KEY'],
            'api_paste_code':str(data_json), 
            'api_option':'paste',
            'api_paste_format':'JSON'}

    r = requests.post(url=config['ENDPOINT_API_URL'], data=data)

    response = r.text 
    print("Response:%s"%response)


if __name__ == '__main__':
    with open(pathlib.Path(__file__).parent.absolute() / "test_data.json", "r") as read_file:
        data = json.load(read_file)
    send_data(data)