const mongoose = require('mongoose');

module.exports = {
    db: {
        Book: require('../models/Book.js'),
        SavedBooks: require('../models/SavedBooks.js')
    },

    initializeDatabase: function (process) {
        // Initialize and Connect To Database
        mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

        // Create Initial Book List Collection
        this.db.SavedBooks.create({ name: "My Book List" })
            .catch(({ message }) => {
                console.log(message);
            });
    },

    getAllBooks: function (cb) {
        this.db.Book.find({}).then(data => {
            cb(data);
        }).catch(err => {
            cb(err);
        });
    }
}