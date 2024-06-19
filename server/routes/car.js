const route = require('express').Router();
const Car = require('../controllers/car');

route.post('/create', Car.createCar);

module.exports = route;
