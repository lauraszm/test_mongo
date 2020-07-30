var express = require('express');
var router = express.Router();

const productosController = require('../controllers/productosController')

/* GET users listing. */
router.get('/', productosController.getAll);

router.get('/:id',(req,res,next)=>{req.app.validateUser(req,res,next)}, productosController.getById);

router.post('/',(req,res,next)=>{req.app.validateUser(req,res,next)}, productosController.create);

router.put('/:id',(req,res,next)=>{req.app.validateUser(req,res,next)}, productosController.change);

router.delete('/:id',(req,res,next)=>{req.app.validateUser(req,res,next)}, productosController.delete);

module.exports = router;