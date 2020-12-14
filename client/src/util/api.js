function Api() {
    this.searchUrl = '/search/';
}

Api.prototype.formatName = function (name) {
    const formattedName = name.split(' ').join('+').toLowerCase();
    return formattedName
}

// Database API Calls
Api.prototype.getSavedBooks = function (cb) {
    fetch('/api/books').then(response => response.json()).then(data => {
        cb(data);
    });
}

Api.prototype.addSavedBook = function (book) {
    fetch('/api/books/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    }).then(response => response.json);
}

Api.prototype.deleteSavedBook = function (bookId, cb) {
    fetch(`/api/books/delete/${bookId}`, {
        method: 'DELETE'
    }).then(response => response.json()).then(data => {
        cb(data);
    });
}

// Google API Calls
Api.prototype.searchBooksByName = function (name, cb) {
    const urlName = this.formatName(name);

    fetch(this.searchUrl + urlName).then(response => response.json()).then(data => {
        cb(data);
    }).catch(err => {
        cb(null, err);
    });
}

export default Api;