import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Stars from './Stars.jsx';
import Bar from './Bar.jsx';

var RatingBreakdown = (props) => {

  var ratingList = props.productChars.ratings;

  var filteredByList = '';
  if (props.filterStars[5]) { filteredByList += '5 Stars/'; }
  if (props.filterStars[4]) { filteredByList += '4 Stars/'; }
  if (props.filterStars[3]) { filteredByList += '3 Stars/'; }
  if (props.filterStars[2]) { filteredByList += '2 Stars/'; }
  if (props.filterStars[1]) { filteredByList += '1 Stars/'; }

  return (
    <div className='rating'>
      <div className='avg-rating-star'>
        {props.averageRating && <div className='avg-rating-score'>{props.averageRating}</div>}
        <Stars singleRating={props.adjustAverageRating} />
      </div>
      <div className='ratingBreakdown-margin-bottom'>{props.totalReviews} total reviews </div>
      <div className='ratingBreakdown-margin-bottom'>Rating Breakdown</div>
      {filteredByList.length > 0 &&
        <div className='ratingBreakdown-margin-bottom'>
          <div className='ratingBreakdown-margin-bottom'>Filtered By: {filteredByList}</div>
          <div className='ratingBreakdown-removeFilters' onClick={(e) => props.setFilterStars({ 1: false, 2: false, 3: false, 4: false, 5: false })}>Remove all filters</div>
        </div>}
      {/* Num Stars - green/grey Bar & # reviews */}
      {[5, 4, 3, 2, 1].map((element, index) => {
        if (ratingList !== undefined) {
          if (ratingList[element] !== undefined) {
            var eachStarReviews = ratingList[element];
          } else {
            var eachStarReviews = 0;
          }
          var percentage = (eachStarReviews / props.totalReviews);

          return (
            <div key={index}>
              <Bar num={element} ratingList={ratingList} percentage={percentage} setFilterStars={props.setFilterStars} filterStars={props.filterStars} />
            </div>
          )
        }
      })
      }
      {props.recommendRate > 0 && <div className='ratingBreakdown-margin-bottom'> {props.recommendRate}% of reviews recommend this product</div>}
    </div>
  )
}

export default RatingBreakdown;
