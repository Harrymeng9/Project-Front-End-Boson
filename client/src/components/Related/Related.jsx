// The Related component will display both the "related products" carousel and the "my outfit" carousel
import React from 'react';
import { useState, useEffect } from "react";
import Card from './relatedComponents/Card.jsx';
import axios from 'axios';

export var products = function (relatedProds) {
  // still need star rating
  return relatedProds.map((prod, index) => {
    return (
      <Card key={index} image={prod.image} name={prod.name} category={prod.category} price={prod.price} />
    )
  })
};

export var Related = () => {

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

  return (
    <div>
      <h4>RELATED PRODUCTS</h4>
      <div className="related">
        {products(relatedProducts)}
      </div>
      <h4>YOUR OUTFIT</h4>
      <div className="yourFit">
        <div className="addToYourFitCard">
          <img className="defaultAdd" src="https://icons.veryicon.com/png/o/miscellaneous/standard-general-linear-icon/plus-60.png"></img>
          <center>
            <p>Add to Outfit</p>
          </center>
        </div>
        <div>
          {/* {myFitCards} */}
        </div>
      </div>
    </div>
  )
};
