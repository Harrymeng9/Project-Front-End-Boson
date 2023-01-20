// The Related component will display both the "related products" carousel and the "my outfit" carousel
import React from 'react';
import { useState, useEffect } from "react";
import Card from './relatedComponents/Card.jsx';
const axios = require('axios');

var Related = () => {

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [myOutfit, setMyOutfit] = useState([]);

  useEffect(() => {
    // TO-DO: format the below endpoint to be dynamic (i.e. work for all product ids, not just 71697)
    axios.get('/products/71697/related')
      .then((results) => {
        var promises = [];
        for (var i = 0; i < results.data.length; i++) {
          var promise = new Promise((resolve, reject) => {
            axios.get(`/products/${results.data[i]}`)
              .then((results) => {
                resolve(results);
              })
              .catch((error) => {
                reject(error);
              })
          })
          promises.push(promise);
        }
        return Promise.all(promises);
      })
      .then((relatedInfo) => {
        var data = [];
        for (var i = 0; i < relatedInfo.length; i++) {
          data.push(relatedInfo[i].data);
        }
        setRelatedProducts(data);
      })
      .catch((error) => {
        console.log('There is an error in Related.jsx when trying to get related product info: ', error);
      })
  }, []);

  console.log('related products', relatedProducts);

  var products = relatedProducts.map((prod, index) => {
    // still need product preview image and star rating
    return (
      <Card key={index} name={prod.name} category={prod.category} price={prod.default_price} />
    )
  });

  return (
    <div>
      <h4>RELATED PRODUCTS</h4>
      <div>
        {products}
      </div>
      <div>
        {/* {myFit} */}
      </div>
    </div>
  )
};

export default Related;