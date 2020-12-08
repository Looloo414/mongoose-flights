const Destination = require('../models/destination');
const Flight = require('../models/flight');
module.exports = {
    new: newDestination,
    addToDestinations,
    create
}
function newDestination(req, res) {
    Destination.find({}, (err, destinations) => {
        res.render('destinations/new', {title: 'Add destination', destinations})
    })
}
function addToDestinations(req, res) {
    console.log(req.body.destinationId, 'destinadionID')
    Flight.findById(req.params.id, function(err, flight) {
      flight.destinations.push(req.body.destination)
      flight.save(function(err) {
        res.redirect(`/flights/${flight._id}`)
      })
    })
  }
  function create(req, res) {
    Destination.create(req.body, function(err, destination) {
      res.redirect('/destinations/new')
    })
  }