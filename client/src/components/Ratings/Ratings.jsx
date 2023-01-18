import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductBreakdown from './ratingComponents/ProductBreakdown.jsx';
import RatingBreakdown from './ratingComponents/RatingBreakdown.jsx';
import ReviewList from './ratingComponents/ReviewList.jsx';


var Ratings = (props) => {

  useEffect(() => {
    // Select a particular product_id for example
    axios.get('/reviews', { params: { product_id: 71698 } })
      .then((reviewsList) => {
        console.log('reviewsList', reviewsList.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  return (
    <div>
      <h4>RATINGS & REVIEWS</h4>
      <ProductBreakdown />
      <RatingBreakdown />
      <ReviewList />
    </div>
  )
}

export default Ratings;
