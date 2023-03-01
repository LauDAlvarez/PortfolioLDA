const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

//GET'S
router.get('/',  indexController.index);
router.get('/certificados',  indexController.certificados);
router.get('/conocimientos',  indexController.conocimiento);
router.get('/skills',  indexController.skills);


module.exports = router;
