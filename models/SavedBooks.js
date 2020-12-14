const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SavedBooksSchema = new Schema({
    name: String,
    books: Array
});

const SavedBooks = mongoose.model('SavedBooks', SavedBooksSchema);

module.exports = SavedBooks;