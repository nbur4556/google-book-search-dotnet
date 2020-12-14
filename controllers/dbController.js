const mongoose = require('mongoose');


module.exports = function (process) {
    // Initialize and Connect To Database
    const db = ({
        Book: require('../models/Book.js'),
        SavedBooks: require('../models/SavedBooks.js')
    });

    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    // Create Initial Book List Collection
    db.SavedBooks.create({ name: "My Book List" })
        .catch(({ message }) => {
            console.log(message);
        });
}