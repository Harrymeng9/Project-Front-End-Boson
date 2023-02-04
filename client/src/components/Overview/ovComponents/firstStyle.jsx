import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

var FirstStyle = (props) => {

  let finalizer = (e) => {
    e.preventDefault();
    props.func(props.style)
  }

  // add return/render here
  return (
    <div onClick={finalizer}>

      <div className="firstStyle">
      <span>&#10003;
        <ul> <strong>{props.name}</strong></ul>
        </span>
      </div>
    </div>
  )

}

export default FirstStyle;