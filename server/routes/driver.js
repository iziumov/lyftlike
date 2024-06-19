const route = require('express').Router();
const Driver = require('../controllers/driver');

route.post('/login', Driver.login);
route.post('/register', Driver.register);

module.exports = route;
