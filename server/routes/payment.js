const route = require('express').Router();

const Payment = require('../controllers/payment');

route.post('/create', Payment.createPayment);
route.post('/pay', Payment.payPayment);

module.exports = route;
