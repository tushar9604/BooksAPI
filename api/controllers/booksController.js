'use strict';

var mongoose = require('mongoose'),
	Book = mongoose.model('Books');

exports.list_all_books = function(req, res) {
	Book.find({}, function(err,book) {
		if (err)
			res.send(err);
		res.json(book);
	});
};

exports.add_a_book = function(req, res) {
	var new_book = new Book(req.body);
	new_book.save(function(err, book) {
		if (err)
			res.send(err);
		res.json(book);
	});
};

exports.get_a_book = function(req,res) {
	Book.find({uuid: req.params.bookId}, function(err,book) {
		if(err)
			res.send(err);
		res.json(book);
	});
};

exports.update_a_book = function(req, res) {
	Book.findOneAndUpdate({uuid: req.params.bookId}, req.body, {new: true}, function(err, book) {
		if (err)
			res.send(err);
		res.json(book);
	});
};

exports.delete_a_book = function(req, res){
	Book.remove({
		uuid: req.params.bookId
	}, function(err,book){
		if (err)
			res.send(err)
		res.json({message: 'Book successfully deleted'});
	});
};