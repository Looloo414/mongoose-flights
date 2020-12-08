var express = require('express');
var router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

router.get('/destinations/new', destinationsCtrl.new);
router.post('/flights/:id/destinations', destinationsCtrl.addToDestinations);
router.post('/destinations', destinationsCtrl.create);

module.exports = router;