const Flight = require('../models/flight')

module.exports = {
    index,
    create,
    new: newFlight,
    show
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {airline: "All flights", flights: flights})
    })
}

function newFlight(req, res) {
    res.render('flights/new', {airline: "Add Flight", err: ''})
}

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key]
    }
    const flight = new Flight(req.body)
    flight.save(function(err) {
        if(err) {
            console.log(err)
            return res.render('flights/new', {err: err, airline: 'All Flights'})
        }
        console.log(flight)
        res.redirect('/flights')
    })

}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/show', {airline: 'Flight Details', flight})
    })
}