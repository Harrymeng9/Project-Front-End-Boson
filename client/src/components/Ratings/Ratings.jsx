import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductBreakdown from './ProductBreakdown.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ReviewList from './ReviewList.jsx';


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
