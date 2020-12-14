const mongoose = require('mongoose');


module.exports = function (process) {
    // console.log(process.env.MONGODB_URI);
    const db = ({
        Book: require('../models/Book.js'),
        SavedBooks: require('../models/SavedBooks.js')
    });

    console.log(db);

    mongoose.createConnection('mongodb://localhost/newbooklist', { useNewUrlParser: true, useUnifiedTopology: true });

    // db.SavedBooks.create({ name: "My Book List" })
    //     .then(dbSavedBooks => {
    //         console.log(dbSavedBooks);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
}