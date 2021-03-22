'use strict';
module.exports = function(app) {
	var booksApi = require('../controllers/booksController');

	// booksApi routes

	app.route('/books')
		.get(booksApi.list_all_books)
		.post(booksApi.add_a_book);

	app.route('/books/:bookId')
		.get(booksApi.get_a_book)
		.put(booksApi.update_a_book)
		.delete(booksApi.delete_a_book);
};