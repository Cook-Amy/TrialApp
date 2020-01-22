const express = require('express');

function createRouter(db) {
  const router = express.Router();

  router.get('/countries', function(req, res, next) {
    var queryDB = "SELECT Name, Population FROM country WHERE Continent = 'North America' ";

    db.query(queryDB, (error, results) => {
      if(error) {
        console.log("Error getting results from DB: ");
        console.log(error);
        res.status(500).json({status: 'error'});
      }
      else {
        console.log("Results back from DB: ");
        console.log(results);
        res.status(200).json(results);
      }
    });
  });

  return router;
}

module.exports = createRouter;