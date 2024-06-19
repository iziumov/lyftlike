const route = require('express').Router();

const Rider = require('../controllers/rider');

route.post('/login', Rider.login);
route.post('/register', Rider.register);

module.exports = route;
