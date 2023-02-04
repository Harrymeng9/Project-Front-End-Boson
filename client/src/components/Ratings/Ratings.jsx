import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductBreakdown from './ratingComponents/ProductBreakdown.jsx';
import RatingBreakdown from './ratingComponents/RatingBreakdown.jsx';
import ReviewList from './ratingComponents/ReviewList.jsx';

var Ratings = (props) => {

  const [productChars, setProductChar] = useState();

  useEffect(() => {
    // To get product breakdown info (product characteristics)
    axios.get('/reviews/meta', { params: { product_id: props.productId } })
      .then((charsList) => {
        // console.log('charsList', charsList.data);
        setProductChar(charsList.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  return (
    <div>
      <h4>RATINGS & REVIEWS</h4>
      <div className="ratingsLeftRight">
        <div>
          {/* Don't render RatingBreakdown until 'productChars' is ready!*/}
          {productChars && <RatingBreakdown productChars={productChars} />}
          {productChars && <ProductBreakdown productChars={productChars} />}
        </div>
        <ReviewList product_id={props.productId} productChars={productChars} />
      </div>

    </div>
  )
}

export default Ratings;