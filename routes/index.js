var express = require('express');
var router = express.Router();
const services = require('../services/render')
const controller = require('../controller/controller')
/* GET home page. */
router.get('/', services.homeRouter);
router.get('/add_imagees', services.add_imagees);
router.get('/update_imagees', services.update_imagees);

router.post('/api/imagees' , controller.create)
router.get('/api/imagees' , controller.find)
router.put('/api/imagees/:id' , controller.update)
router.delete('/api/imagees/:id' , controller.delete)
module.exports = router;
