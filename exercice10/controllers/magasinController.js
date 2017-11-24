const mongoose = require('mongoose');
const Magasin = mongoose.model('Magasin');
exports.getMagasins = async (req,res)=>{

    //get magasin from mongo
    const magasins = await Magasin.find();
    console.log(magasins)
    res.render('magasins', {"magasins": magasins})
}