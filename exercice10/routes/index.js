const express = require('express');
const router = express.Router();
const magasinController = require('../controllers/magasinController');
const deskController = require('../controllers/deskController');
const pagesController = require('../controllers/pagesController');

// Do work here

// départ
// router.get('/', (req, res) => {
//   let obj = req.params.name;
//   res.render('Hey! It works!');
// });

//pour avoir le texte
// router.get('/', (req, res) => {
//   let obj = req.params.name;
//   res.send('Hey! It works!');
// });

//Query String
// router.get('/', (req, res) => {
//   let obj = req.query;
//   res.send('Hey! It works!' +obj.name);
// });
// router.get('/:name', (req, res) => {
//   let obj = req.params.name;
//   res.send('Hey! It works!' +obj);
// });
// router.get('/:name', (req, res) => {
//   let obj = req.params.name;
//   // let jbo = obj.split("").reverse().join("");
//   // res.send('Hey! It works! ' +jbo);
  

//   // let arr = [1,2,3]
//   // console.log([...arr,4,5])
//   // let other = {
//   //   name:"Gilles"
//   // }
//   // console.log({...obj.job:"ceo"})

//   res.send('Hey! It works! ' +[...req.params.name].reverse().join(''));
// });

router.get('/',magasinController.getMagasins)
router.get('/magasins',magasinController.getMagasins)
router.get('/about',pagesController.about);

router.get('/contact',pagesController.contact);
module.exports = router;
