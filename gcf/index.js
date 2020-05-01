'use strict';

// [START functions_helloworld_http]
const escapeHtml = require('escape-html');

// [END functions_helloworld_http]

// [START functions_helloworld_get]
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
	res.send("Hi Erika! You'll have nothing in the following json: "
	 + JSON.stringify(req.body));
};