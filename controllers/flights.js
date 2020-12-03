const Flight = require('../models/flight')

module.exports = {
    index,
    create,
    new: newFlight
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {airlines: "All flight", flights: flights})
    })
}

function newFlight(req, res) {
    res.render('flights/new', {airline: "Add Flight", err: ''})
}

function create(req, res) {
    const flight = new Flight(req.body)
    flight.save(function(err) {
        if(err) {
            console.log(err)
            return res.render('flights/new', {err: err})
        }
        console.log(flight)
        res.redirect('/flights')
    })

}