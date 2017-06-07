require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const port = process.env.NODE_PORT || 3000;

mongoose.Promise = require('bluebird');

// Bootstrap routes
require('./config/express')(app);
require('./app/routes')(app);

// Connect mongoose
// const database = `${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
mongoose.connect('mongodb://mongo:27017');



app.listen(port, () => console.log(`app listening on port ${port}`));

module.exports = app;
