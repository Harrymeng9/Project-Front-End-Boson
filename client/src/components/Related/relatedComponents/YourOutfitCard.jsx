import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { ImCancelCircle } from 'react-icons/im';
import Stars from '../../Ratings/ratingComponents/Stars.jsx';

var YourOutfitCard = (props) => {

  const [starRating, setStarRating] = useState(0);
  const [hasReviews, setHasReviews] = useState(false);
  const [discountPrice, setDiscountPrice] = useState(null);

  useEffect(() => {
    axios.get('/reviews', { params: { product_id: props.productId } })
      .then((results) => {
        if (results.data.results.length > 0) {
          setHasReviews(true);
        }
      })
      .catch((error) => {
        console.log('There is an error in YourOutfitCard.jsx while trying to check if the product has any reviews', error);
      })
      .then(() => {
        return axios.get('/starrating', { params: { product_id: props.productId } })
      })
      .then((results) => {
        setStarRating(results.data);
      })
      .catch((error) => {
        console.log('There is an error in YourOutfitCard.jsx while trying to set the star rating', error);
      })
      .then(() => {
        return axios.get(`/products/${props.productId}/styles`);
      })
      .then((results) => {
        for (var i = 0; i < results.data.results.length; i++) {
          if (results.data.results[i]['default?'] === true) {
            setDiscountPrice(results.data.results[i]['sale_price']);
            break;
          }
        }
      })
      .catch((error) => {
        console.log('There is an error in YourOutfitCard.jsx while trying to set the discount price', error);
      })
  }, []);

  var handleCancelButtonClick = () => {
    // remove the card from "your outfit" list

    // props.setStarButtonClick(!props.starButtonClick);
    // props.setSelectedRelatedProductName(props.name);

    // var selectedRelatedProduct = props.productId;

    // axios.get(`/products/${props.currentProduct}`)
    //   .then((results) => {
    //     props.setCurrentProductName(results.data.name);
    //     var features = results.data.features;
    //     var currentProductFeatures = [];
    //     for (var i = 0; i < features.length; i++) {
    //       var feature = features[i].feature;
    //       var value = features[i].value;
    //       if (value === null) {
    //         currentProductFeatures.push(feature);
    //       } else if (feature === null) {
    //         currentProductFeatures.push(value);
    //       } else if (feature !== null && value !== null) {
    //         currentProductFeatures.push(value + ' ' + feature);
    //       }
    //     }
    //     props.setCurrentProductFeatures(currentProductFeatures);
    //   })
    //   .catch((error) => {
    //     console.log('There is an error in YourOutfitCard.jsx when trying to get current product features', error);
    //   })
    //   .then(() => {
    //     return axios.get(`/products/${selectedRelatedProduct}`)
    //   })
    //   .then((results) => {
    //     var features = results.data.features;
    //     var selectedRelatedProductFeatures = [];
    //     for (var i = 0; i < features.length; i++) {
    //       var feature = features[i].feature;
    //       var value = features[i].value;
    //       if (value === null) {
    //         selectedRelatedProductFeatures.push(feature);
    //       } else if (feature === null) {
    //         selectedRelatedProductFeatures.push(value);
    //       } else if (feature !== null && value !== null) {
    //         selectedRelatedProductFeatures.push(value + ' ' + feature);
    //       }
    //     }
    //     props.setSelectedRelatedProductFeatures(selectedRelatedProductFeatures);
    //   })
    //   .catch((error) => {
    //     console.log('There is an error in YourOutfitCard.jsx when trying to get selected related product features', error);
    //   })
  };

  var handleYourOutfitCardClick = () => {
    props.setProductId(props.productId);
  };

  return (
    <div className="card">
      <div className="related-image-container">
        <ImCancelCircle color="black" onClick={handleCancelButtonClick} className="related-image-button" />
        <img className="related-image" src={props.image} onClick={handleYourOutfitCardClick}></img>
      </div>
      <div onClick={handleYourOutfitCardClick}>
        <p className="related-details">{props.category}</p>
        <p className="related-details">{props.name}</p>
        {discountPrice !== null ? <div className="discount">
          <p className="discounted-price">{discountPrice}</p>
          <p className="original-price">{props.price}</p>
        </div> : <p className="related-details">{props.price}</p>}
        {hasReviews ? <Stars singleRating={starRating} /> : null}
      </div>
    </div>
  )
};

export default YourOutfitCard;