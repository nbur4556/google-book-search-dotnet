const axios = require('axios');

const googleBooksApi = (app, process) => {
    app.get("/search", () => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=' + process.env.GOOGLE_API_TOKEN)
            .then((result) => {
                console.log(result.data.items);
            });
    });
}

module.exports = googleBooksApi;