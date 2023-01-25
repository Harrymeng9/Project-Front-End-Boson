// The Related component will display both the "related products" carousel and the "my outfit" carousel
import React from 'react';
import { useState, useEffect } from "react";
import Card from './relatedComponents/Card.jsx';
import axios from 'axios';

var Related = () => {

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [myOutfit, setMyOutfit] = useState([]);

  useEffect(() => {
    // TO-DO: format the below endpoint to be dynamic (i.e. work for all product ids, not just 71697)
    axios.get('/products/71697/related')
      .then((results) => {
        var info = [];
        for (var i = 0; i < results.data.length; i++) {
          var image = new Promise((resolve, reject) => {
            axios.get(`/products/${results.data[i]}/styles`)
              .then((results) => {
                resolve(results);
              })
              .catch((error) => {
                reject(error);
              })
          })
          var related = new Promise((resolve, reject) => {
            axios.get(`/products/${results.data[i]}`)
              .then((results) => {
                resolve(results);
              })
              .catch((error) => {
                reject(error);
              })
          })
          info.push(image);
          info.push(related);
        }
        return Promise.all(info);
      })
      .then((relatedInfo) => {
        var data = [];
        for (var i = 1; i < relatedInfo.length; i += 2) {
          var image = relatedInfo[i - 1].data.results[0].photos[0].thumbnail_url;
          var name = relatedInfo[i].data.name;
          var category = relatedInfo[i].data.category;
          var price = relatedInfo[i].data.default_price;

          data.push({
            image: image,
            name: name,
            category: category,
            price: price
          });
        }
        setRelatedProducts(data);
      })
      .catch((error) => {
        console.log('There is an error in Related.jsx when trying to get related product info: ', error);
      })
  }, []);

  var products = relatedProducts.map((prod, index) => {
    // still need star rating
    return (
      <Card key={index} image={prod.image} name={prod.name} category={prod.category} price={prod.price} />
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