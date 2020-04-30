# sensor
----------------------------------------------------------------
Record sensor readings in the cloud

Components:
- Raspberry Pi
- DHT11 temperature and humidity sensor
- Cloud (GCF of AWS)

Parts:
- Send HTTP from Raspberry Pi to endpoint
- Read sensor measurements from Raspberry Pi
- Read Raspberry Pi measurements in the cloud
- Save data to DB (BitQuery)

Plan:
1. Learn to send HTTP requests from Raspberry Pi
	1. Connect Raspberry Pi to internet
	2. Send dummy HTTP request and pick up with GCF
2. Read sensor measurements from Raspberry Pi
	1. Wire up sensor
	2. Read to json
	3. send json over HTTP
	4. Pick up with GCF
3. Persitance
	1. Learn BitQuery 