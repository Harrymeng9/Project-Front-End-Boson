import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import IndStyle from './indStyle.jsx';

var StyleSelect = (props) => {
  //confirm if props are being passed down
  console.log('stylish', props.styles)

  // if (props !== undefined) {
  //   console.log('hereweare', Object.values(props.styles[0]))
  // }

  //add return/render here
  return (
    props.styles.length === 0 ?
      <h3> Loading your styles </h3>
      : <div>
        <h3>Available Styles for this Product</h3>
      {props.styles.map(x => {
        return (
          <IndStyle key={x.style_id} name={x.name} price={x.original_price}/>
        )
      }

      )}
    </div>
  )
}

export default StyleSelect;