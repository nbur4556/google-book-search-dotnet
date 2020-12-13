const Api = () => {
    this.searchUrl = '/search/';
}

Api.prototype.searchBooksByName = (name) => {
    fetch(this.searchUrl + name).then(response => {
        response.json();
    }).then(data => {
        console.log(data);
    })
}

export default new Api();