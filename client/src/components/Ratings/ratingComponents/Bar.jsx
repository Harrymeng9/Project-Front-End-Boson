import React from 'react';
import {useEffect} from 'react';

var Bar = (props) => {

  var greenWidthValue = Number((props.percentage * 200).toFixed(1));
  var greyWidthValue = 200 - greenWidthValue;

  var resetFilterStars = () => {
    // Once the object value changes from false to true
    // {1:false, 2: false, .....}
    props.setFilterStars(f => ({
      ...f,
      [props.num] : !props.filterStars[props.num],
    }))
  }

  return (
    <div className='stars-bar-score' onClick={resetFilterStars}>
      <div className='stars-decoration'>{props.num} Stars </div>
      <div className='greenBar' style={{ width: greenWidthValue }}></div>
      <div className='greyBar' style={{ width: greyWidthValue }}></div>
      <div className='star-reviews'>{props.ratingList[props.num]}</div>
    </div>
  )
}

export default Bar;