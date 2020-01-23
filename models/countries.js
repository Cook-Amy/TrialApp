const express = require('express');

function createRouter(db) {
  const router = express.Router();

  router.get('/countries', function(req, res, next) {
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
        // res.status(200).json(results);

        let str = formatString(results);
        // console.log(str);

        res.send(str);

      }
    });
  });

  return router;
}

function formatString(results) {
  let str = `
      <table>
        <thead>
          <tr>
           <th>Country</th>
           <th>Capital</th>
           <th>Population</th>
          </tr>
      </thead>
      <tbody>`;
  for(r of results) {
    str += `
        <tr>
          <td>` + r.Name + `</td>
          <td>` + r.Capital + `</td>
          <td>` + r.Population + `</td>
        </tr>`
  }

  str += `
      </tbody>
    </table>`;

    return str;
}

module.exports = createRouter;