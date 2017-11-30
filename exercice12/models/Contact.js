const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.promise = global.Promise;
const md5 = require("md5");
const validator = require('validator');
const mongodbErrorHandler = require("mongoose-mongodb-errors")
const passportLocalMongoose = require("passport-local-mongoose")

const contactSchema = new Schema({
    name: {
        type: String,
        required: 'Merci d\'encoder le nom de la personne de contact'
    },
    location: {
        type: {
            type: String,
            default: 'Point'
        },
        town: {
            type: String,
            required: 'Vous devez entrez des coordonnées'
        },
        coordinates: [
            {
                type: Number,
                required: 'Vous devez entrez des coordonnées'
            }
        ],
        address: {
            type: String,
            required: 'Vous devez fournir une addresse'
        }
    }
})
contactSchema.plugin(mongodbErrorHandler)
module.exports = mongoose.model('Contact', contactSchema);
