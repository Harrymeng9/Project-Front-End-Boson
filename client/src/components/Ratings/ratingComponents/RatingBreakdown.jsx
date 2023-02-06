import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Stars from './Stars.jsx';
import Bar from './Bar.jsx';

var RatingBreakdown = (props) => {

  var ratingList = props.productChars.ratings;

  return (
    <div id='rating'>
      <div className='avg-rating-star'>
        {props.averageRating && <div className='avg-rating-score'>{props.averageRating}</div>}
        <Stars singleRating={props.adjustAverageRating} />
      </div>
      <div className='totalReviews'>{props.totalReviews} total reviews </div>
      {/* Num Stars - green/grey Bar & # reviews */}
      {[5, 4, 3, 2, 1].map((element, index) => {
        if (ratingList !== undefined) {
          var percentage = (ratingList[element] / props.totalReviews);
          return (
            <div key={index}>
              <Bar num={element} ratingList={ratingList} percentage={percentage} />
            </div>
          )
        }
      })
      }
      <div className='review-percentage'> {props.recommendRate} of reviews recommend this product</div>
    </div>
  )
}

export default RatingBreakdown;
