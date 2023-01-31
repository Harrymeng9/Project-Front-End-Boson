import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Stars from './Stars.jsx';
import Bar from './Bar.jsx';

var RatingBreakdown = (props) => {

  var ratingList = props.productChars.ratings;
  var recommendList = props.productChars.recommended;
  var totalScore = 0, totalReviews = 0;

  for (var i in ratingList) {
    totalScore += i * ratingList[i];
    totalReviews += Number(ratingList[i]);
  }
  var averageRating = totalScore / totalReviews;
  var adjustAverageRating = averageRating - averageRating % 0.25
  var recommendRate = (Number(recommendList[true]) / (Number(recommendList[true]) + Number(recommendList[false]))).toFixed(2) * 100 + '%';

  return (
    <div id='rating'>
      <div className='avg-rating-star'>
        <div className='avg-rating-score'>{averageRating.toFixed(1)}</div>
        <Stars singleRating={adjustAverageRating} />
      </div>
      <div className='totalReviews'>{totalReviews} total reviews </div>
      <div className='review-percentage'> {recommendRate} of reviews recommend this product</div>
      {/* Num Stars - green/grey Bar & # reviews */}
      {[5, 4, 3, 2, 1].map((element, index) => {
        var percentage = (ratingList[element] / totalReviews);
        return (
          <div key={index}>
            <Bar num={element} ratingList={ratingList} percentage={percentage} />
          </div>
        )
      })}
      <br></br>
    </div>
  )
}

export default RatingBreakdown;
