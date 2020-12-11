const express = require('express');
const googleBooksApi = require('./routes/google-books-api.js')

const app = express();
const PORT = 8080;

googleBooksApi();

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log("listening on localhost:" + PORT);
});