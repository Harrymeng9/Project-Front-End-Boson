import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

var ProductBreakdown = (props) => {
  // console.log('product breakdown', props.productChar);
  var chars = props.productChars.characteristics;
  var categories = ['Size', 'Width', 'Comfort', 'Quality', 'Length', 'Fit'];
  var description;

  return (
    <div id='product'>
      <div>Product Breakdown</div>
      {categories.map((category, i) => {
        if (chars[category] !== undefined) {
          var score = Number(chars[category].value);
          if (category === 'Size' || category === 'Width' || category === 'Length') {
            if (score < 5 / 3) {
              description = 'Too small';
            } else if (score > 10 / 3) {
              description = 'Too big';
            } else {
              description = 'Perfect';
            }
          } else {
            if (score < 5 / 3) {
              description = 'Poor';
            } else if (score > 10 / 3) {
              description = 'Great';
            } else {
              description = 'Good';
            }
          }

          return (
            <div key={i}>
              <div>{category}</div>
              {/* <div>{chars[category].value}</div> */}
              <div>{score.toFixed(2)}</div>
              <div>{description}</div>
            </div>
          )
        }
      })}
      <br></br>
    </div>
  )
}

export default ProductBreakdown;
