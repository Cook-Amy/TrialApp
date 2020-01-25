var db = require('./database');

function getCountriesFromDB(callback) {
  console.log("getCountriesFromDB functin called");

  var queryDB = "SELECT * FROM country WHERE Continent = 'North America' ";

  db.query(queryDB, (error, results) => {
    if(error) {
      console.log("Error getting results from DB: ");
      console.log(error);
      res.status(500).json({status: 'error'});
    }
    else {
      console.log("Results back from DB: ");
      console.log(results);

      callback(null, results);

      // res.status(200).json(results);
    }
  });

}

module.exports = {
  getCountriesFromDB: getCountriesFromDB
}