require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');


const app = express();

const port = config.port;

mongoose.Promise = require('bluebird');

// Bootstrap routes
require('./config/express')(app);
require('./app/routes')(app);

// Connect mongoose
const database = `${process.env.DB_HOST}://${process.env.DB_DATABASE}:${process.env.DB_PORT}`;
mongoose.connect(database);

app.listen(port, () => console.log(`app listening on port ${port}`));

module.exports = app;
