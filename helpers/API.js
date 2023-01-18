require("dotenv").config();
const axios = require('axios');

// in the helper file
let getAPI = (cb) => {

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
        cb(null, list.data)
     })
     .catch(err => {
      cb(err)
     });
  };

module.exports.getAPI = getAPI;