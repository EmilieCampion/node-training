const fs = require('fs');
const promisify = require("es6-promisify");
const read = promisify(fs.readFile);
const Model = require(`${process.cwd()}/models/facts.js`)
exports.getFact = async (req, res) => {
    let dataFact = new Model().getAllFacts();
    dataFact.then(result => {
        let facts = JSON.parse(result.toString());
        res.render('about', { 'facts': facts })
    })
}