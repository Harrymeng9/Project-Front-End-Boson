import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

var Info = (props) => {
  //confirm if props are being passed
  // const [prodInfo, setInfo] = useState([]);
  console.log('info props', props.info)
  var single = props.info;


  // add return/render here
  if (props === undefined) {
    return (
      <div>loading</div>
    )
  } else {
  return (
    <div>
      <h2>{single[0].name}</h2>
      <div>{single[0].category}</div>
      <div>${single[0].default_price}</div>
      <div>{single[0].slogan}</div>
      <button onClick={() => {alert('Added to you styles')}}>STAR</button>
    </div>
  )
  }
}

export default Info;