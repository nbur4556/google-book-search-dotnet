function Api() {
    this.searchUrl = '/search/';
}

// Google API Calls
Api.prototype.formatName = function (name) {
    const formattedName = name.split(' ').join('+').toLowerCase();
    return formattedName
}

Api.prototype.searchBooksByName = function (name, cb) {
    const urlName = this.formatName(name);

    fetch(this.searchUrl + urlName).then(response => response.json()).then(data => {
        cb(data);
    }).catch(err => {
        cb(null, err);
    });
}

export default Api;