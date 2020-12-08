var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')

/* GET users listing. */
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);
router.get('/', flightsCtrl.index);
router.delete('/:id', flightsCtrl.delete);
router.get('/:id', flightsCtrl.show);

module.exports = router;