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
    localStorage.removeItem(`${props.productId}`);
    props.setYourOutfitProducts({ ...localStorage });
  };

  return (
    <div className="card">
      <div className="related-image-container">
        <ImCancelCircle color="black" onClick={handleCancelButtonClick} className="related-image-button" />
        <a onClick={() => { props.setProductId(props.productId); }} href={`/productDetails/${props.productId}`}>
          <img className="related-image" src={props.image}></img>
        </a>
      </div>
      <div className="card-information">
        <p className="related-details">{props.category}</p>
        <p className="card-product-name">{props.name}</p>
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