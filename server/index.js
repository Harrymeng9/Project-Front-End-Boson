const path = require('path');
const express = require('express');
const app = express();
const db = require('./db.js');
// basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("dotenv").config();

// will need to get webpack up and running as well as our top level React component in order to see anything in the browser
app.use(express.static(path.join(__dirname, '../client/dist')));

// basic route to get us started
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// connection (we will use the standard localhost:3000 as our development environment)
app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
