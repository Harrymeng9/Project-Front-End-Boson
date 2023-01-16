import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductBreakdown from './Components/ProductBreakdown.jsx';
import RatingBreakdown from './Components/RatingBreakdown.jsx';
import ReviewList from './Components/ReviewList.jsx';


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
