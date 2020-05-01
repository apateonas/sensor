#!/usr/bin/python3

import json
import requests
import urllib
import pathlib
import board
import adafruit_dht
from datetime import datetime


CONFIG_PATH = pathlib.Path(__file__).parent.absolute() / "config.json"


def read_sensor(config):
    dhtDevice = adafruit_dht.DHT11(config["DHT11_PIN"])
    measurements = config["MEASUREMENTS"]
    measurements["timestamp"] = datetime.now().timestamp()
    try:
        measurements["temperature C"] = dhtDevice.temperature
        measurements["humidity %"] = dhtDevice.humidity
    except RuntimeError as error:
        # Errors happen fairly often, DHT's are hard to read, just keep going
        print(error.args[0])
    return measurements


def send_data(config, measurements):
    # convert measurements to json
    measurements_json = json.dumps(measurements)

    # data to be sent to api 
    data = {'api_dev_key': config['PASTEBIN_DEV_KEY'],
            'api_user_key': config['PASTEBIN_USER_KEY'],
            'api_paste_name': "test post",
            'api_paste_code': str(measurements_json), 
            'api_option':'paste',
            'api_paste_format':'JSON'}

    r = requests.post(url=config['ENDPOINT_API_URL'], data=data)

    response = r.text 
    print("Response: " + str(response))


if __name__ == '__main__':
    # load config
    with open(CONFIG_PATH, "r") as read_file:
        config = json.load(read_file)

    measurements = read_sensor(config)
    print("Measurements: " + str(measurements))
    send_data(config, measurements)
