var express = require('express');
var bodyParser = require("body-parser");
var app     = express();
var mongoose = require('mongoose');
var addItemDB = require('./dbFunctions/addItemtoDB.js');
var queryDB = require('./dbFunctions/queryDB.js');


app.use(express.static('views'));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/humanitarian/fr', function(req, res)
{
	//queryDB();
	res.sendFile( __dirname  + '/mainFR.html');
});

app.get('/humanitarian/en', function(req, res)
{
	//queryDB();
	res.sendFile( __dirname  + '/mainEN.html');
});


app.get('/humanitarian/ger', function(req, res)
{
	//queryDB();
	res.sendFile( __dirname  + '/mainGER.html');
});

app.get('/humanitarian/spa', function(req, res)
{
	//queryDB();
	res.sendFile( __dirname  + '/mainSPA.html');
});


app.get('/humanitarian/fr/form', function(req, res)
{
	res.sendFile( __dirname  + '/formOfferFR.html');
});

app.get('/humanitarian/en/form', function(req, res)
{
	res.sendFile( __dirname  + '/formOfferEN.html');
});

app.get('/humanitarian/ger/form', function(req, res)
{
	res.sendFile( __dirname  + '/formOfferGER.html');
});

app.get('/humanitarian/spa/form', function(req, res)
{
	res.sendFile( __dirname  + '/formOfferSPA.html');
});


app.get('/humanitarian/proposition/fr', function(req, res)
{
	//Get parameters values
	var name = req.param("prop-name");
	var surname = req.param("prop-surname");
	var city = req.param("prop-city");
	var country = req.param("prop-country");
	var adress = req.param("prop-adress");
	var zipcode = req.param("prop-zipcode");
	var sleepingPlaces = req.param("prop-sleepingPlaces");

	//create item
	var item = {
	  "name" : name,
	  "surname" : surname,
	  "city" : city,
	  "country" : country,
	  "adress" : adress,
	  "zipcode" : zipcode,
	  "sleepingPlaces" : sleepingPlaces
	}


	addItemDB.addItem(item);

	//redirect user to the main page

	res.sendFile(__dirname + "/mainFR.html");
});


app.get('/humanitarian/proposition/en', function(req, res)
{
	//Get parameters values
	var name = req.param("prop-name");
	var surname = req.param("prop-surname");
	var city = req.param("prop-city");
	var country = req.param("prop-country");
	var adress = req.param("prop-adress");
	var zipcode = req.param("prop-zipcode");
	var sleepingPlaces = req.param("prop-sleepingPlaces");

	//create item
	var item = {
	  "name" : name,
	  "surname" : surname,
	  "city" : city,
	  "country" : country,
	  "adress" : adress,
	  "zipcode" : zipcode,
	  "sleepingPlaces" : sleepingPlaces
	}


	addItemDB.addItem(item);

	//redirect user to the main page

	res.sendFile(__dirname + "/mainEN.html");
});

app.get('/humanitarian/proposition/ger', function(req, res)
{
	//Get parameters values
	var name = req.param("prop-name");
	var surname = req.param("prop-surname");
	var city = req.param("prop-city");
	var country = req.param("prop-country");
	var adress = req.param("prop-adress");
	var zipcode = req.param("prop-zipcode");
	var sleepingPlaces = req.param("prop-sleepingPlaces");

	//create item
	var item = {
	  "name" : name,
	  "surname" : surname,
	  "city" : city,
	  "country" : country,
	  "adress" : adress,
	  "zipcode" : zipcode,
	  "sleepingPlaces" : sleepingPlaces
	}


	addItemDB.addItem(item);

	//redirect user to the main page

	res.sendFile(__dirname + "/mainGER.html");
});


app.get('/humanitarian/proposition/spa', function(req, res)
{
	//Get parameters values
	var name = req.param("prop-name");
	var surname = req.param("prop-surname");
	var city = req.param("prop-city");
	var country = req.param("prop-country");
	var adress = req.param("prop-adress");
	var zipcode = req.param("prop-zipcode");
	var sleepingPlaces = req.param("prop-sleepingPlaces");

	//create item
	var item = {
	  "name" : name,
	  "surname" : surname,
	  "city" : city,
	  "country" : country,
	  "adress" : adress,
	  "zipcode" : zipcode,
	  "sleepingPlaces" : sleepingPlaces
	}


	addItemDB.addItem(item);

	res.sendFile(__dirname + "/mainSPA.html");
});


app.listen('8082')
console.log('The server is started on port : 8082');
