// TODO: replace with terraform script

'use strict';

function main() {
  // load config
  const config = require("./config.json")
  const datasetId = config.DATASET_ID;
  const tableId = config.TABLE_ID;

  // [START bigquery_create_dataset]
  // Import the Google Cloud client library and create a client
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function createDataset() {
    console.log("Creating new dataset...")
    // TODO: Create a new dataset
    // const [dataset] = await bigquery.createDataset(datasetId, config.DATASET_OPTIONS);
    // console.log(`Dataset ${dataset.id} created.`);
  }

  const dataset = bigquery.dataset(datasetId);
  dataset.exists()
    .then((data) => {
      const exists = data[0];
      if (exists) {
        console.log("dataset already exists.");
      } else {
        createDataset();
      }
    })
    // TODO: create table
  // [END bigquery_create_dataset]
}

main();