const mongoose = require('mongoose');
const Desk = mongoose.model('Desk');
const fs = require('fs')
exports.getDesks = async (req,res)=>{

    //get desk from mongo
    const desks = await Desk.find();
    console.log(desks)
    fs.readFile('../models/desk.js', (err, data) => {
        if (err){
            res.end('data not found')
        }
        console.log(data)
        res.end(generateHtml(data))
    })
    res.render('desks', {"desks": desks})
}
function generateHtml(tpl,json){   
    return tpl.toString('utf8')
    .replace('%books%',
        JSON.parse(json)  
    );
}