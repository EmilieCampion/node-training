const fs = require('fs');
const promisify = require("es6-promisify");
const read = promisify(fs.readFile);
const Model = require(`${process.cwd()}/models/articles.js`)
exports.getPortfolio = async (req, res) => {
  let dataPromise = new Model().getAllArticles();
  dataPromise.then(result => {
    let articles = JSON.parse(result.toString());
    res.render('portfolio', { 'articles': articles })
  })
}