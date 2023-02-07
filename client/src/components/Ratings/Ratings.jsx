import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductBreakdown from './ratingComponents/ProductBreakdown.jsx';
import RatingBreakdown from './ratingComponents/RatingBreakdown.jsx';
import ReviewList from './ratingComponents/ReviewList.jsx';

var Ratings = (props) => {

  const [productChars, setProductChar] = useState({});
  const [totalReviews, setTotalReviews] = useState(-1);
  const [averageRating, setAverageRating] = useState(0);
  const [adjustAverageRating, setAdjustAverageRating] = useState(0);
  const [recommendRate, setRecommendRate] = useState(0);
  const [filterStars, setFilterStars] = useState({ 1: false, 2: false, 3: false, 4: false, 5: false });

  useEffect(() => {
    // To get product breakdown info (product characteristics)
    axios.get('/reviews/meta', { params: { product_id: props.productId } })
      .then((data) => {
        setProductChar(data.data.fullData);
        setTotalReviews(data.data.totalReviews);
        setAverageRating(data.data.averageRating);
        setAdjustAverageRating(data.data.adjustAverageRating);
        setRecommendRate(data.data.recommendRate);
      }
      )
      .catch((err) => {
        console.log(err);
      });
  }, [props.productId]);

  return (
    <div>
      <h4>RATINGS & REVIEWS</h4>
      <div className="ratingsLeftRight">
        <div>
          {/* Don't render RatingBreakdown until 'productChars' is ready!*/}
          {productChars && <RatingBreakdown productChars={productChars} totalReviews={totalReviews} averageRating={averageRating}
            adjustAverageRating={adjustAverageRating} recommendRate={recommendRate} setFilterStars={setFilterStars} filterStars={filterStars}/>}
          {productChars && <ProductBreakdown productChars={productChars} />}
        </div>
        {productChars && totalReviews !== -1 && <ReviewList product_id={props.productId} productChars={productChars} totalReviews={totalReviews} filterStars={filterStars}/>}
      </div>

    </div>
  )
}

export default Ratings;