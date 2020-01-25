var mysql = require('mysql');
var db;

function connectDB () {
  if (!db) {
    db = mysql.createConnection({
      host: 'database-1.cc9faes6cfe1.us-east-2.rds.amazonaws.com',
      user: 'admin',
      password: 'db2020drapp',
      database: 'countries'
    });

    db.connect((err) => {
      if(err) {
        throw err;
      }
      else {
        console.log("Connected to DB.");
      }
    });

  }
}

module.exports = {
  connectDB: connectDB
}
