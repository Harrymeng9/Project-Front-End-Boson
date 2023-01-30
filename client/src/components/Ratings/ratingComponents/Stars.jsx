import React from 'react';
import StarRatings from 'react-star-ratings';

var Stars = (props) => {

  var singleRating = props.singleRating;

  return (
    <div>
      <StarRatings
        starRatedColor = 'black'
        rating = {props.singleRating}
        starDimension = '20px'
        starSpacing = '3px'/>
    </div>
  )
};

export default Stars;