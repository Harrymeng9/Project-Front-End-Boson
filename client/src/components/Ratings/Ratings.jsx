import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductBreakdown from './ratingComponents/ProductBreakdown.jsx';
import RatingBreakdown from './ratingComponents/RatingBreakdown.jsx';
import ReviewList from './ratingComponents/ReviewList.jsx';


var Ratings = (props) => {

  const [reviewsList, setReviewsList] = useState();
  const [productChars, setProductChar] = useState();

  useEffect(() => {
    // Select a particular product_id for example
    axios.get('/reviews', { params: { product_id: 71698 } })
      .then((reviewsList) => {
        console.log('reviewsList', reviewsList.data);
        setReviewsList(reviewsList.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // To get product breakdown info (product characteristics)
    axios.get('/reviews/meta', { params: { product_id: 71697 } })
      .then((charsList) => {
        console.log('charsList', charsList.data);
        setProductChar(charsList.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  return (
    <div>
      <h4>RATINGS & REVIEWS</h4>
      <RatingBreakdown />
      {productChars && <ProductBreakdown productChars={productChars} />}
      {/* Don't render ReviewList until 'reviewsList' is ready!*/}
      {reviewsList && <ReviewList reviewsList={reviewsList} />}
    </div>
  )
}

export default Ratings;
