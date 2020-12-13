function Api() {
    this.searchUrl = '/search/';
}

Api.prototype.searchBooksByName = function (name) {
    console.log(this.searchUrl + name);

    fetch('http://localhost:3000/search/lord+of+the+rings').then(response => {
        console.log(response);
        response.json();
    }).then(data => {
        console.log(data);
    })
}

export default Api;