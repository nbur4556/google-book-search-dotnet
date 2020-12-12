const express = require('express');
const dotenv = require('dotenv');
const googleBooksApi = require('./routes/google-books-api.js')

// Initialize Environment
const process = {
    env: dotenv.config({ path: `${__dirname + '/.env'}` }).parsed
}

// Initialize Application
const app = express();

// API Routes
googleBooksApi(app, process);

// Create Server
app.listen(process.env.PORT, () => {
    console.log("listening on localhost:" + process.env.PORT);
});