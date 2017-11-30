const mongoose = require('mongoose');
const multer = require('multer');
const jimp = require('jimp');
const uuid = require('uuid');
const Contact = mongoose.model('Contact');
const fs = require('fs')
exports.getContacts = async (req, res) => {

    //get desk from mongo
    const contacts = await Contact.find();
    console.log(contacts)
    // fs.readFile('../models/Contact.js', (err, data) => {
    //     if (err) {
    //         res.end('data not found')
    //     }
    //     console.log(data)
    //     res.end(generateHtml(data))
    // })
    res.render('contact', { "contacts": contacts })
}
// function generateHtml(tpl, json) {
//     return tpl.toString('utf8')
//         .replace('%contact%',
//         JSON.parse(json)
//         );
// }