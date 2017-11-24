const mongoose = require('mongoose');

const deskSchema = new mongoose.Schema({
    name:{
        type: String,
        required:'Merci d\'encoder le nom du magasin'
    },
    location:{
        type:{
            type:String,
            default:'Point'
        },
        coordinates :{
                type:String,
                required:'Vous devez entrez des coordonnées'
            },
        address:{
            type: String,
            required: 'Vous devez fournir une addresse'
        }
    }
})

module.exports = mongoose.model('Desk', deskSchema);
