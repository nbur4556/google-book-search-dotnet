const dbController = require('../controllers/dbController.js');

const databaseApi = (app) => {
    // Get All Books Route
    app.get('/api/books', (req, res) => {
        dbController.getAllBooks(result => {
            res.json(result);
        });
    });

    // Add Book Route
    app.post('/api/books/add', (req, res) => {
        dbController.addBook(req.body, (result => {
            res.json(result);
        }));
    });

    // Delete Book Route
    app.delete('/api/books/delete/:bookId', (req, res) => {
        dbController.deleteBook(req.params.bookId, (result => {
            res.json(result);
        }));
    });
}

module.exports = databaseApi;