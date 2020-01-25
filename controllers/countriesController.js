const countriesModel = require("../models/countriesModel");

function getAllCountries(req, res) {
  console.log("getAllCountries function called");

  countriesModel.getCountriesFromDB(function countriesCallback(error, result) {
    // send DB info back to page

    if(error) {
      console.log("Error in country callback");
      console.log(error);
    }
    else {
      console.log("Country result lenght: " + result.lenth);
      res.json(result);
      res.end();
    }
  });
}

module.exports = {
  getAllCountries: getAllCountries
}