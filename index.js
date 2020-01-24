const express = require('express');
const mysql = require('mysql');
const cors = require('cors')
const bodyParser = require('body-parser');

const countries = require('./models/countries');

// const connection = mysql.createConnection({
//   host: process.env.DB_HOSTNAME,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: 'countries'
// });

const connection = mysql.createConnection({
  host: 'database-1.cc9faes6cfe1.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'db2020drapp',
  database: 'countries'
});

connection.connect((err) => {
  if(err) {
    throw err;
  }
  console.log("Connected to DB.");
});

const app = express()
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(cors())
  .use(countries(connection))
  .use(express.static('public'));

  // app.get('/', (req, res) => {
  //   res.send('Trial #2');
  // });

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});