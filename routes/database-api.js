const dbController = require('../controllers/dbController.js');

const databaseApi = (app) => {
    // Get All Books
    app.get('/api/books', (req, res) => {
        dbController.getAllBooks(data => {
            res.send(data);
        });
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