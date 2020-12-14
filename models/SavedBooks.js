const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SavedBooksSchema = new Schema({
    name: {
        type: String,
        unique: true
    }
});

const SavedBooks = mongoose.model('SavedBooks', SavedBooksSchema);

module.exports = SavedBooks;