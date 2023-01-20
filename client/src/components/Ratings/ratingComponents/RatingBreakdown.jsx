import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

var RatingBreakdown = (props) => {

  var ratingList = props.productChars.ratings;
  var recommendList = props.productChars.recommended;
  var sum = 0, count = 0;

  for (var i in ratingList) {
    sum += i * ratingList[i];
    count += Number(ratingList[i]);
  }
  var averageRating = sum / count;
  var recommendRate = Number(recommendList[true]) / (Number(recommendList[true]) + Number(recommendList[false]));

  return (
    <div>
      <div>Ratings Breakdown</div>
      <div>Average Rating: {averageRating.toFixed(1)} Add stars image later</div>
      <div>{recommendRate.toFixed(2) * 100 + '%'} of reviews recomment this product</div>
      <div>5 Stars {ratingList[5]}</div>
      <div>4 Stars {ratingList[4]}</div>
      <div>3 Stars {ratingList[3]}</div>
      <div>2 Stars {ratingList[2]}</div>
      <div>1 Stars {ratingList[1]}</div>
      <br></br>
    </div>
  )
}

export default RatingBreakdown;
