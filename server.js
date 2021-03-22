var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000;
	mongoose = require('mongoose'),
	Book = require('./api/models/booksModel'), // created model loading here
	bodyParser = require('body-parser');

// mongoose instance conncetion url
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/booksRoutes'); // importing route
routes(app); // register the route

app.listen(port);
console.log('Books API RESTful server started on: '+port);

app.use(function(req,res){
	res.status(404).send({url: req.originalUrl + ' not found'})
});