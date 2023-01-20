require("dotenv").config();
const axios = require('axios');

//this file will contain the functions for making requests to the API for
//question and answer data

//create helper method for retrieving a sorted list of questions from the API
var fetchQuestions = (productId, resultCount) => {
  return new Promise((resolve, reject) => {
    //make a get request to the Atelier API using axios
    axios({
      //specify method
      method: 'get',
      //specify url
      url: `http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${productId}&count=${resultCount}`,
      //include authorization headers
      headers: {
        authorization: `${process.env.TOKEN}`
      }
    })
      .then((results) => {
        console.log(results);
        resolve(results);
      })
      .catch((err) => {
        console.log('error in fetchQuestions helper');
        reject(err);
      });
  });

};

module.exports.fetchQuestions = fetchQuestions;


