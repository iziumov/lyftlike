const route = require('express').Router();

const Trip = require('../controllers/trip');

route.get('/all', Trip.getAllTrips);
route.get('/id', Trip.getTrip);
route.post('/create', Trip.createTrip);
route.patch('/update', Trip.updateTrip);
route.post('/close', Trip.closeTrip);

module.exports = route;
