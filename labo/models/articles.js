const fs = require('fs');
const promisify = require("es6-promisify");
const read = promisify(fs.readFile);
const write = promisify(fs.writeFile);
let articles = null;
module.exports = class ArticleModel {
    constructor() {
        this.articles = null;
        console.log('init article model')
    }
    getAllArticles() {
        return read(`${process.cwd()}/models/articles.json`)
    }
}
