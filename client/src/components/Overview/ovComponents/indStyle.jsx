import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

var IndStyle = (props) => {

  let finalizer = (e) => {
    e.preventDefault();
    props.func(props.style)
  }

  // add return/render here
  return (
    <div onClick={finalizer}>
      <div className="indStyle">
        <ul> <strong>Choose Style:</strong></ul>
        <ul> {props.name}</ul>
      </div>
    </div>
  )

}

export default IndStyle;