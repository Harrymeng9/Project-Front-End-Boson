require("dotenv").config();
const axios = require('axios');

//this file will contain the functions for making requests to the API for
//question and answer data

//create helper method for retrieving a sorted list of questions from the API
var fetchQuestions = (params) => {
  let options = {
    url: `http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `${process.env.TOKEN}`
    },
    params: {
      product_id: params.product_id,
      page: params.page,
      count: params.count
    }
  };
  //make a get request to the Atelier API using axios
  return axios.get(options.url, { headers: options.headers, params: options.params});
};

module.exports.fetchQuestions = fetchQuestions;


