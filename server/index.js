// require("dotenv").config();
const path = require('path');
const express = require('express');
const app = express();
// basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// require("dotenv").config();
const axios = require('axios');
const { getAllProducts, getOne, singleStyle } = require('./helpers/overViewAPI.js');
const { relatedProds } = require('./helpers/RelatedAPI.js');

// will need to get webpack up and running as well as our top level React component in order to see anything in the browser
app.use(express.static(path.join(__dirname, '../client/dist')));

// basic route to get us started
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// overview server requests
app.get('/products', (req, res) => {
  getAllProducts((fail, pass) => {
    if (fail) {
      res.sendStatus(404);
    } else {
      res.send(pass).status(200);
    }
  })
});

//test for single product
app.get('/products/:id', (req, res) => {
  var uniqueId = req.params.id;

  getOne(uniqueId, (fail, pass) => {
    if (fail) {
      res.sendStatus(404);
    } else {
      console.log('pass', pass);
      res.send(pass).status(200);
    }
  })
});

//test for single style
app.get('/products/71697/styles', (req, res) => {
  singleStyle((fail, pass) => {
    if (fail) {
      res.sendStatus(404);
    } else {
      res.send(pass).status(200);
    }
  })
});

app.get('/products/71697/related', (req, res) => {
  relatedProds((fail, pass) => {
    if (fail) {
      res.sendStatus(404);
    } else {
      res.send(pass).status(200);
    }
  })
});


/*
-------------------------
Ratings and Reviews
-------------------------
*/

// return a list of reviews for a particular product
app.get('/reviews', (req, res) => {
  let options = {
    url: "http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/",
    headers: {
      'User-Agent': 'request',
      'Authorization': `${process.env.TOKEN}`
    }
  };
  var product_id = req.query.product_id;
  axios.get(options.url, { headers: options.headers, params: { product_id: product_id } })
    .then((reviewsList) => {
      res.status(200).send(reviewsList.data);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
});

// return the product breakdown info for a particular product
app.get('/reviews/meta', (req, res) => {
  let options = {
    url: "http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta/",
    headers: {
      'User-Agent': 'request',
      'Authorization': `${process.env.TOKEN}`
    }
  };
  var product_id = req.query.product_id;
  axios.get(options.url, { headers: options.headers, params: { product_id: product_id } })
    .then((productChars) => {
      res.status(200).send(productChars.data);
    })
    .catch((err) => {
      res.status(404).send('Fail to retrieve product characteristics data!');
    });
});



// connection (we will use the standard localhost:3000 as our development environment)
app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
