const axios = require('axios');

const googleBooksApi = (app, process) => {
    app.get("/search/:bookTitle", (req, res) => {
        const bookTitle = req.params.bookTitle;
        const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&key=${process.env.GOOGLE_API_TOKEN}`;

        axios.get(apiUrl).then((result) => {
            res.json(result.data.items);
        }).catch(err => {
            console.log(err);
        });
    });
}

module.exports = googleBooksApi;