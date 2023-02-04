const path = require('path');
const express = require('express');
const app = express();
const axios = require('axios');
const { getAllProducts, getOne, singleStyle } = require('./helpers/overViewAPI.js');
const { relatedProds } = require('./helpers/RelatedAPI.js');
const { fetchQuestions } = require('./helpers/questionAnswerAPI.js');

// basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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
      res.send(pass).status(200);
    }
  })
});

//test for single style
app.get('/products/:id/styles', (req, res) => {
  var uniqueId = req.params.id;

  singleStyle(uniqueId, (fail, pass) => {
    if (fail) {
      res.sendStatus(404);
    } else {
      res.send(pass).status(200);
    }
  })
});

app.get('/products/:id/related', (req, res) => {

  var uniqueId = req.params.id;

  relatedProds(uniqueId, (fail, pass) => {
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
  var page = req.query.page;
  axios.get(options.url, { headers: options.headers, params: { page: page, count: 2, product_id: product_id } })
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
      // console.log('meta data', productChars.data);
      res.status(200).send(productChars.data);
    })
    .catch((err) => {
      res.status(404).send('Fail to retrieve product characteristics data!');
    });
});

// Send POST request once add a new review
app.post('/reviews', (req, res) => {
  let options = {
    url: "http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/",
    headers: {
      'User-Agent': 'request',
      'Authorization': `${process.env.TOKEN}`
    }
  };

  var postData = {
    product_id: req.body.product_id,
    rating: req.body.rating,
    summary: req.body.summary,
    body: req.body.body,
    recommend: req.body.recommend,
    name: req.body.name,
    email: req.body.email,
    photos: req.body.photos,
    characteristics: req.body.characteristics
  };

  axios.post(options.url, postData, { headers: options.headers })
    .then((data) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.sendStatus(404);
    });

})
/*
-------------------------
Question and Answer
-------------------------
*/

app.get('/questions', (req, res) => {
  var params = req.query;
  fetchQuestions(params)
    .then((results) => {
      // console.log('questions array:', results.data.results);
      res.status(200).send(results.data.results);
    })
    .catch((err) => {
      console.log('error in fetchQuestions helper');
      console.log(err)
      res.sendStatus(404);
    });
  //receive incoming request from client
  //access the params from the request body
  //make call to API for questions, passing down params
  //if that succeeds, send back an success message response
  //otherwise send a error response
});

// connection (we will use the standard localhost:3000 as our development environment)
app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
