'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema ({
	uuid: {
		type: String,
		required: "Kindly provide the Book uuid."
	},
	name: {
		type: String,
		required: "Kindly provide the Book name."
	},
	releaseDate: {
		type: Number,
		required: "Kindly provide the Book release Date."
	},
	authorName: {
		type: String,
		required: "Kindly provide the Book author name."
	}
});

module.exports = mongoose.model('Books',BookSchema);