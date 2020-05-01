# Read sensor to cloud
----------------------------------------------------------------
Record sensor readings in the cloud

Components:
- Raspberry Pi
- DHT11 temperature and humidity sensor
- Cloud (GCF or AWS)

Parts:
- Send HTTP from Raspberry Pi to endpoint
- Read sensor measurements from Raspberry Pi
- Read Raspberry Pi measurements in the cloud
- Save data to DB (BitQuery)

Plan:
1. Learn to send HTTP requests from Raspberry Pi
	1. [x] Connect Raspberry Pi to internet
	2. [x] Send dummy HTTP request and pick up with GCF
		- use pastbin to test
	3. [x] Send requests every minute with cron
		- make sure python path is specified in bash script
		- add `MAILTO=""` to cron to stop mail
	4. [x] Write script to setup cron.
	5. [x] Test on Raspberry Pi
2. Read sensor measurements from Raspberry Pi
	1. [x] Wire up sensor
		- type `pinout` for pi pinout
		- [GPIO with Python](https://www.raspberrypi.org/documentation/usage/gpio/python/README.md)
	2. [x] Read to json
	3. [x] send json over HTTP
		- recorded in pastebin
	4. [ ] Pick up with GCF
3. Persitance
	1. [ ] Learn BigQuery 
