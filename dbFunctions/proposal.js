var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create schema
var proposalSchema = new mongoose.Schema({
  name : String,
  surname : String,
  city : String,
  country : String,
  adress : String,
  zipcode : Number,
  sleepingPlaces : Number
});

//Create model
module.exports = mongoose.model('proposal', proposalSchema);
