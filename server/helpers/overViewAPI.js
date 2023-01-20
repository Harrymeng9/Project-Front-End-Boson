require("dotenv").config();
const axios = require('axios');

// in the helper file
let getAllProducts = (cb) => {
  let options = {
    url: "http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/",
    headers: {
      'User-Agent': 'request',
      'Authorization': `${process.env.TOKEN}`
    }
  };
  axios.get(options.url, { headers: options.headers })
    .then(list => {
      console.log('Products Fetched');
      cb(null, list.data)
    })
    .catch(err => {
      cb(err)
    });
};

//test for single item
let getOne = (uniqueId, cb) => {
  let options = {
    url: `http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${uniqueId}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `${process.env.TOKEN}`
    }
  };
  // get the info from the API
  axios.get(options.url, { headers: options.headers })
    .then(list => {
      cb(null, list.data)
    })
    .catch(err => {
      cb(err)
    });
};

let singleStyle = (cb) => {
  let options = {
    url: "http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/71697/styles",
    headers: {
      'User-Agent': 'request',
      'Authorization': `${process.env.TOKEN}`
    }
  };
  // get the info from the API
  axios.get(options.url, { headers: options.headers })
    .then(list => {
      cb(null, list.data)
    })
    .catch(err => {
      cb(err)
    });
};

module.exports.getAllProducts = getAllProducts;
module.exports.getOne = getOne;
module.exports.singleStyle = singleStyle;
