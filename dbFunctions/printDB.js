var mongoose = require('mongoose');
var proposal = require('./proposal.js');



  //init connection
  mongoose.connect('mongodb://localhost/humanitarian', function(err) {
    if (err) { throw err; }
  });

  proposal.find(function (err, data) {
    if (err) return console.error(err);
    for(var i =0; i<data.length; i++)
    {
      console.log(data[i]);
    }
    mongoose.connection.close();
  });
