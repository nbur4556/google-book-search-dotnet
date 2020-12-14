const databaseApi = (app, process) => {
    // Get All Books
    app.get('/api/books', (req, res) => {
        res.send("Get All Books");
    });

    // Add Book
    app.post('/api/books/add', (req, res) => {
        res.send("Add New Book");
    });

    // Delete Book
    app.delete('/api/books/delete/:bookId', (req, res) => {
        console.log("Delete Book");
    });
}

module.exports = databaseApi;