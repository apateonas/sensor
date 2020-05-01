'use strict';

// [START recordMeasurements]
/**
 * HTTP Cloud Function.
 * This function is exported by index.js, and is executed when
 * you make an HTTP PUT to the deployed function's endpoint.
 *
 * @param {Object} req Cloud Function request context.
 *                     More info: https://expressjs.com/en/api.html#req
 * @param {Object} res Cloud Function response context.
 *                     More info: https://expressjs.com/en/api.html#res
 */
exports.recordMeasurements = (req, res) => {
	console.log("attempting to insert " + JSON.stringify(req.body))

  	// Import the Google Cloud client library
	const {BigQuery} = require('@google-cloud/bigquery');

	const datasetId = 'sensor_data';
	const tableId = 'measurements';
	const row = req.body

	// Create a client
	const bigqueryClient = new BigQuery();

	// Insert data into a table
	bigqueryClient
		.dataset(datasetId)
		.table(tableId)
		.insert([row])
		.then((data) => {
            console.log(`Inserted 1 row`);
            console.log(data);
            res.status(200).send("Successfully inserted data")
        })
        .catch(err => {
            if (err && err.name === 'PartialFailureError') {
              if (err.errors && err.errors.length > 0) {
                console.log('Insert errors:');
                err.errors.forEach(err => console.error(err));
              }
            } else {
              console.error('ERROR:', err);
            }
    });
};
