import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductBreakdown from './ratingComponents/ProductBreakdown.jsx';
import RatingBreakdown from './ratingComponents/RatingBreakdown.jsx';
import ReviewList from './ratingComponents/ReviewList.jsx';


var Ratings = (props) => {

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
