require("dotenv").config();
const path = require('path');
const express = require('express');
const app = express();
// basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("dotenv").config();
const axios = require('axios');

// will need to get webpack up and running as well as our top level React component in order to see anything in the browser
app.use(express.static(path.join(__dirname, '../client/dist')));

// basic route to get us started
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/products', (req, res) => {
  let options = {
    url: "http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/",
    headers: {
      'User-Agent': 'request',
      'Authorization': `${process.env.TOKEN}`
    }
  };

  axios.get(options.url, {headers: options.headers})
   .then(list => {
      console.log('Products Fetched');
      res.send(list.data).status(200)
   })
   .catch(err => {
    console.log(err);
    res.sendStatus(404);
   });

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



// connection (we will use the standard localhost:3000 as our development environment)
app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
