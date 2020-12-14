const mongoose = require('mongoose');

module.exports = {
    db: {
        Book: require('../models/Book.js'),
        SavedBooks: require('../models/SavedBooks.js')
    },

    // Create connection to database
    initializeDatabase: function (process) {
        // Initialize and Connect To Database
        mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

        // Create Initial Book List Collection
        this.db.SavedBooks.create({ name: "My Book List" })
            .catch(({ message }) => {
                console.log(message);
            });
    },

    // Callback all books in database
    getAllBooks: function (cb) {
        this.db.Book.find({}).then(data => {
            cb(data);
        }).catch(err => {
            cb(err);
        });
    },

    // Add a book to the database
    addBook: function (bookData, cb) {
        this.db.Book.create({
            title: bookData.title,
            description: bookData.description,
            image: bookData.image
        }).then(data => {
            cb(data);
        }).catch(err => {
            cb(err);
        });
    },

    // Delete a book from the database
    deleteBook: function (bookId, cb) {
        this.db.Book.deleteOne({ _id: bookId }).then(data => {
            cb(data);
        }).catch(err => {
            cb(err);
        });
    }
}