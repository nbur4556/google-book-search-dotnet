const mongoose = require('mongoose');

const db = ({
    Book: require('../models/Book.js'),
    SavedBooks: require('../models/SavedBooks.js')
});

module.exports = {
    initializeDatabase: function (process) {
        // Initialize and Connect To Database
        mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

        // Create Initial Book List Collection
        db.SavedBooks.create({ name: "My Book List" })
            .catch(({ message }) => {
                console.log(message);
            });
    },
    getAllBooks: function (cb) {
        db.Book.find({}).then(data => {
            cb(data);
        }).catch(err => {
            cb(err);
        });
    }
}