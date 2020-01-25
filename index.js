const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

// const db = mysql.createConnection({
//   host: process.env.DB_HOSTNAME,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: 'countries'
// });

const app = express()
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(cors())
  .use(express.static('public'));

  app.get('/', (req, res) => {
    console.log("Entered homepage");
  });

  const countriesController = require('./models/countriesModel');

  app.get('/countries', countriesController.getAllCountries);



const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});