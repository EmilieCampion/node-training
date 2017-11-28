const { catchErrors } = require('../handlers/errorHandlers');

const express = require('express');
const router = express.Router();
const magasinController = require('../controllers/magasinController');
// const deskController = require('../controllers/deskController');
const pagesController = require('../controllers/pagesController');
const userController = require('../controllers/userController');
const authenticationController = require('../controllers/authenticationController')

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

router.get('/', magasinController.getMagasins)
router.get('/magasins/:slug', magasinController.getMagasinBySlug)
router.get('/magasins/:id/edit', authenticationController.isLoggedIn, magasinController.editMagasin)
router.get('/magasins', magasinController.getMagasins)
router.get('/about', pagesController.about);
router.get('/ajout', authenticationController.isLoggedIn, magasinController.addMagasin);
router.get('/contact', pagesController.contact);

router.post('/ajout',
    magasinController.upload,
    magasinController.resize,
    magasinController.createMagasin);
router.post('/ajout/:id',
    magasinController.upload,
    magasinController.resize,
    magasinController.updateMagasin);


// USers controller
router.get('/login', userController.loginForm)
router.get('/register', catchErrors(userController.registerForm))

router.post('/login', authenticationController.login)
router.get('/logout', authenticationController.logout)

router.post('/register', userController.validateRegister, userController.register, authenticationController.login)

module.exports = router;