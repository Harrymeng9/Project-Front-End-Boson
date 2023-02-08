const path = require('path');
const express = require('express');
const app = express();
const axios = require('axios');
const { getAllProducts, getOne, singleStyle } = require('./helpers/overViewAPI.js');
const { relatedProds } = require('./helpers/RelatedAPI.js');
const { fetchQuestions } = require('./helpers/questionAnswerAPI.js');
const { postQuestion } = require('./helpers/questionAnswerAPI.js');

// basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

// basic route to get us started
// app.get('/productDetails/:productId', (req, res) => {
//   console.log('req.params.productId', req.params.productId);
//   var newProductId = req.params.productId;
//   res.redirect(`/${newProductId}`);
// });

// interactions
app.post('/interactions', (req, res) => {

  var element = req.body.element;
  var widget = req.body.widget;
  var time = req.body.time;

  if (Object.keys(element).length === 0) {
    element = '';
  }
  console.log(element);
  let options = {
    url: "http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/interactions",
    headers: {
      'User-Agent': 'request',
      'Authorization': `${process.env.TOKEN}`
    },
    body: {
      element: element,
      widget: widget,
      time: time
    }
  };

  axios.post(options.url, options.body, { headers: options.headers })
    .then((results) => {
      res.sendStatus(201);
    }).catch((error) => {
      res.sendStatus(422);
    })
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

  var count = req.query.count;
  var product_id = req.query.product_id;
  var sort = req.query.sort;

  axios.get(options.url, { headers: options.headers, params: { count: count, sort: sort, product_id: product_id } })
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
      var ratingList = productChars.data.ratings;
      var recommendList = productChars.data.recommended;
      var totalScore = 0, totalReviews = 0;

      for (var i in ratingList) {
        totalScore += i * ratingList[i];
        totalReviews += Number(ratingList[i]);
      }

      var averageRating = (totalScore / totalReviews).toFixed(1); // 3.7 for example
      var recommendRate = (Number(recommendList[true]) / (Number(recommendList[true]) + Number(recommendList[false]))).toFixed(2) * 100 + '%';
      var adjustAverageRating = averageRating - averageRating % 0.25;
      var result = {
        'fullData': productChars.data,
        'totalReviews': totalReviews,
        'averageRating': averageRating,
        'adjustAverageRating': adjustAverageRating,
        'recommendRate': recommendRate
      };
      res.status(200).send(result);
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

// Put request to update API data
app.put('/reviews/:id/helpful', (req, res) => {
  var review_id = req.body.review_id;
  console.log('review_id', review_id);

  let options = {
    url: `http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/${review_id}/helpful`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `${process.env.TOKEN}`
    }
  };

  axios.put(options.url, { review_id: review_id }, { headers: options.headers })
    .then((data) => {
      res.sendStatus(204);
    })
    .catch((err) => {
      res.status(404).send('Fail to update helpfullness!');
    });
});

// To get average rating values
app.get('/starrating', (req, res) => {
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
      var ratingList = productChars.data.ratings;
      // {'1': 5, '2', 10, }
      var totalScore = 0, totalReviews = 0;
      for (var i in ratingList) {
        totalScore += i * ratingList[i];
        totalReviews += Number(ratingList[i]);
      }
      var averageRating = (totalScore / totalReviews).toFixed(1); // 3.7 for example
      res.status(200).send(averageRating);
    })
    .catch((err) => {
      res.status(404).send('Fail to retrieve product characteristics data!');
    });
});

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
      console.log(err);
      res.sendStatus(404);
    });
});

app.post('/questions', (req, res) => {
  //grab data from request
  var params = req.body;
  //make post request to the API
  postQuestion(params)
    .then((results) => {
      console.log(results);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('error caught in postQuestion on server:', err);
      res.sendStatus(404);
    });
});

// connection (we will use the standard localhost:3000 as our development environment)
app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
