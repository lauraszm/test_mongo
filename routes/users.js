var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController')

/* GET users listing. */
router.post('/registro', usersController.registro)
router.post('/login', usersController.login)
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
