const Destination = require('../models/destination')
const Flight = require('../models/flight')

module.exports = {
    new: newDestination,
    create,
    addToDestinations

}
function newDestination(req, res) {
    Destination.find({}, function(err, destinations) {
      res.render('destinations/new', {airline: 'Add Destination', destinations})
    })
  }

// function newDestination(req, res) {
//   Destination.find({})
//   .then((destinations) => {
//     res.render('destinations/new', {title: 'Add Destination', destinations})
//   })
//   .catch((err) => {
//     console.log(err)
//   })
// }

function create(req, res) {
    Destination.create(req.body, function(err, destination) {
      res.redirect('/destinations/new')
    })
  }

function addToDestinations(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      flight.location.push(req.body.destinationId)
      flight.save(function(err) {
        res.redirect(`/flights/${flight._id}`)
      })
    })
  }