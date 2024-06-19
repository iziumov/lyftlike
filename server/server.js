const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
require('dotenv').config();

const { driverRoute, paymentRoute, riderRoute, tripRoute, carRoute } = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '5mb' }));

const server = http.createServer(app);

app.use('/api/car', carRoute);
app.use('/api/driver', driverRoute);
app.use('/api/payment', paymentRoute);
app.use('/api/rider', riderRoute);
app.use('/api/trip', tripRoute);

server.listen(PORT, () => {
  console.log('listening on port ' + port);
});
