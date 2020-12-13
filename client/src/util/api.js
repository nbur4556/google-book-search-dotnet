function Api() {
    this.searchUrl = '/search/';
}

Api.prototype.formatName = function (name) {
    const formattedName = name.split(' ').join('+').toLowerCase();
    return formattedName
}

Api.prototype.searchBooksByName = function (name) {
    const urlName = this.formatName(name);

    fetch(this.searchUrl + urlName).then(response => response.json()).then(data => {
        console.log(data);
    });
}

export default Api;