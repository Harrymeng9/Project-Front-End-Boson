require("dotenv").config();
const axios = require('axios');

//this file will contain the functions for making requests to the API for
//question and answer data

//create helper method for retrieving a sorted list of questions from the API
var fetchQuestions = (productId, resultCount) => {
  //make a get request to the Atelier API using axios
  axios({
    //specify method
    method: 'get',
    //specify url
    url: `http://www.api.com/page?product_id=${productId}&count=${resultCount}`,
    //include authorization headers
  });
};


