import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

var ProductBreakdown = (props) => {
  // console.log('product breakdown', props.productChar);
  var chars = props.productChars.characteristics;
  var categories = ['Size', 'Width', 'Comfort', 'Quality', 'Length', 'Fit'];
  var description;

  return (
    <div>
      <div>Product Breakdown</div>
      {categories.map((category, i) => {
        if (chars[category] !== undefined) {
          if (category === 'Size' || category === 'Width' || category === 'Length') {
            if (chars[category].value < 5 / 3) {
              description = 'Too small';
            } else if (chars[category].value > 10 / 3) {
              description = 'Too big';
            } else {
              description = 'Perfect';
            }
          } else {
            if (chars[category].value < 5 / 3) {
              description = 'Poor';
            } else if (chars[category].value > 10 / 3) {
              description = 'Great';
            } else {
              description = 'Good';
            }
          }

          return (
            <div key={i}>
              <div>{category}</div>
              <div>{chars[category].value}</div>
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
