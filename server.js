const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const googleBooksApi = require('./routes/google-books-api.js');

// Initialize Application
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Initialize Environment
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}
else {
    process = { env: dotenv.config({ path: `${__dirname + '/.env'}` }).parsed }
}

//Initialize Database
const db = {
    Book: require('./models/Book.js'),
    SavedBooks: require('./models/SavedBooks.js')
}

console.log(process.env.MONGODB_URI);
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

// API Routes
googleBooksApi(app, process);

// Create Server
app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`);
})

app.listen(process.env.PORT, () => {
    console.log("listening on localhost:" + process.env.PORT);
});