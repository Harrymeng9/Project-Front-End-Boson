import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

var Info = (props) => {
  //confirm if props are being passed down
  console.log(props)
  if (props.things === undefined) {
    return (
      <div>Loading....</div>
    )
  } else {
    return (
      <div>
        <div>{props.things.category}</div>
        <div>{props.things.name}</div>
        <div>{props.things.default_price}</div>
        <button onClick={() => {alert('Added to you styles')}}>STAR</button>
      </div>
      // <div>{props.things.default_price}</div>
    )
  }

  //add return/render here

}

export default Info;