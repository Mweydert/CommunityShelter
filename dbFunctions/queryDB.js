var mongoose = require('mongoose');
var proposal = require('./proposal.js');


function queryDB()
{
  var arrayAdress = new Array();

    //init connection
    mongoose.connect('mongodb://localhost/humanitarian', function(err) {
      if (err) { throw err; }
    });


    proposal.find(function (err, data) {
      if (err) return console.error(err);
      for(var i =0; i<data.length; i++)
      {
        console.log(data[i].adress);
        arrayAdress.push(data[i].adress + data[i].city);
      }
      mongoose.connection.close();

      console.log(arrayAdress.length);

    });
}

exports.queryDB = queryDB;
