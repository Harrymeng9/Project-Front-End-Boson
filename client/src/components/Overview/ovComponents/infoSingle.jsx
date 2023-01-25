import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

var InfoSingle = (props) => {

  // add return/render here
  if (props === undefined) {
    return (
      <div>loading</div>
    )
  } else {
    return (
      <div>
        <h2>{props.name}</h2>
        <div>{props.category}</div>
        <div>${props.default_price}</div>
        <div>{props.slogan}</div>
        <button onClick={() => { alert('Added to you styles') }}>STAR</button>
      </div>
    )
  }
}

export default InfoSingle;