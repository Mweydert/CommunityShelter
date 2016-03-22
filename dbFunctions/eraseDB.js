var mongoose = require('mongoose');
var proposal = require('./proposal.js');


//init connection
mongoose.connect('mongodb://localhost/humanitarian', function(err) {
  if (err) { throw err; }
});

//remove all items
proposal.remove(function (err) {
  if (err) { throw err; }
  console.log('Toutes les données ont été supprimées !');
  mongoose.connection.close();
});
