import React from 'react';

var Bar = (props) => {
  var greenWidthValue = (props.percentage * 200).toFixed(1);
  var greyWidthValue = 200 - greenWidthValue;

  return (
    <div className='stars-bar-score' >
      <div className='stars-decoration'>{props.num} Stars </div>
      <div className='greenBar' style={{ width: greenWidthValue }}></div>
      <div className='greyBar' style={{ width: greyWidthValue }}></div>
      <div className='star-reviews'>{props.ratingList[props.num]}</div>
    </div>
  )
}

export default Bar;