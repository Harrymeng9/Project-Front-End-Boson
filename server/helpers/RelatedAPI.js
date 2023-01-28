require("dotenv").config();
const axios = require('axios');

let relatedProds = (uniqueId, cb) => {

  let options = {
    url: `http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${uniqueId}/related`,
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

module.exports.relatedProds = relatedProds;