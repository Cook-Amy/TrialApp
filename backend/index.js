const express = require('express');
const mysql = require('mysql');
const cors = require('cors')
const bodyParser = require('body-parser');

const countries = require('./models/countries');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'world'
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
  .use(countries(connection));

  app.get('/', (req, res) => {
    res.send('Trial App');
  });

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});