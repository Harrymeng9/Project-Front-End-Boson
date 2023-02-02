// The Card component will be used for both the "related products" cards and the "my outfit" cards
import React from "react";
import { useState } from "react";
import axios from 'axios';
import { ImStarFull } from 'react-icons/im';

var Card = (props) => {
  /* will need: product category, product name, price, star rating,
  product preview image, an x or a star in top right corner, depending
  on which type of card (related product or outfit) */

  var handleStarButtonClick = () => {
    props.setStarButtonClick(!props.starButtonClick);
    props.setSelectedRelatedProductName(props.name);

    var selectedRelatedProduct = props.productId;

    axios.get(`/products/${props.currentProduct}`)
      .then((results) => {
        props.setCurrentProductName(results.data.name);
        var features = results.data.features;
        var currentProductFeatures = [];
        for (var i = 0; i < features.length; i++) {
          var feature = features[i].feature;
          var value = features[i].value;
          if (value === null) {
            currentProductFeatures.push(feature);
          } else if (feature === null) {
            currentProductFeatures.push(value);
          } else if (feature !== null && value !== null) {
            currentProductFeatures.push(value + ' ' + feature);
          }
        }
        props.setCurrentProductFeatures(currentProductFeatures);
      })
      .catch((error) => {
        console.log('There is an error in Card.jsx when trying to get current product features', error);
      })
      .then(() => {
        return axios.get(`/products/${selectedRelatedProduct}`)
      })
      .then((results) => {
        var features = results.data.features;
        var selectedRelatedProductFeatures = [];
        for (var i = 0; i < features.length; i++) {
          var feature = features[i].feature;
          var value = features[i].value;
          if (value === null) {
            selectedRelatedProductFeatures.push(feature);
          } else if (feature === null) {
            selectedRelatedProductFeatures.push(value);
          } else if (feature !== null && value !== null) {
            selectedRelatedProductFeatures.push(value + ' ' + feature);
          }
        }
        props.setSelectedRelatedProductFeatures(selectedRelatedProductFeatures);
      })
      .catch((error) => {
        console.log('There is an error in Card.jsx when trying to get selected related product features', error);
      })
  }

  return (
    <div className="card">
      <div className="related-image-container">
        <ImStarFull color="yellow" onClick={handleStarButtonClick} className="related-image-button" />
        <img className="related-image" src={props.image}></img>
      </div>
      <div>
        <p className="related-details">{props.category}</p>
        <p className="related-details">{props.name}</p>
        <p className="related-details">{props.price}</p>
        <p className="related-details">Star Rating</p>
      </div>
    </div>
  )
};

export default Card;
