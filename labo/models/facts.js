const fs = require('fs');
const promisify = require("es6-promisify");
const read = promisify(fs.readFile);
const write = promisify(fs.writeFile);
let facts = null;
module.exports = class FactModel {
    constructor() {
        this.facts = null;
        console.log('init fact model')
    }
    getAllFacts() {
        return read(`${process.cwd()}/models/facts.json`)
    }
}
