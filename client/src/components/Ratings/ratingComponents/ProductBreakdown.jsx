import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { AiFillCaretDown } from 'react-icons/ai';

var ProductBreakdown = (props) => {
  var chars = props.productChars.characteristics;
  var categories = ['Size', 'Width', 'Comfort', 'Quality', 'Length', 'Fit'];
  var description;

  return (
    <div id='product'>
      {categories.map((category, i) => {
        if (chars !== undefined && chars[category] !== undefined) {
          var score = Number(chars[category].value).toFixed(2);
          if (category === 'Size' || category === 'Width' || category === 'Length') {
            description = ['Too small', 'Perfect', 'Too big'];
          } else {
            description = ['Poor', 'Great', 'Good'];
          }

          return (
            <div key={i}>
              <div className='product-set'>
                <div className='product-category'>{category}</div>
                <div className='product-greyBar-icon' style={{width:255}}>
                  <div className='product-icon' style={{ left: (score / 5) * 255 }}><AiFillCaretDown size={20} /></div>
                  <div className='product-greyBar' style={{ width: 255 }}></div>
                </div>
                <div className='product-descriptions'>
                  <div className='product-description'>{description[0]}</div>
                  <div className='product-description'>{description[1]}</div>
                  <div className='product-description'>{description[2]}</div>
                </div>
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}

export default ProductBreakdown;
