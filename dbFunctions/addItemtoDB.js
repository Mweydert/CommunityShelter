var mongoose = require('mongoose');
var proposal = require('./proposal.js');


function addItem(item)
{
  //init connection
  mongoose.connect('mongodb://localhost/humanitarian', function(err) {
    if (err) { throw err; }
  });

var myProposal = new proposal(item);


  myProposal.save(function(err) {
    if(err) { throw err; }
    console.log("Proposition succesfully added to database !");
    mongoose.connection.close();
  });
}

exports.addItem = addItem;
