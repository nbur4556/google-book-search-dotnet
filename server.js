const express = require('express');
const dotenv = require('dotenv');
const dbController = require('./controllers/dbController.js');
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
    process.env = dotenv.config({ path: `${__dirname + '/.env'}` }).parsed;
}

// API Routes
googleBooksApi(app, process);

// Create Server
app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`);
})

//Initialize Database
dbController(process);

app.listen(process.env.PORT, () => {
    console.log("listening on localhost:" + process.env.PORT);
});