import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

var IndStyle = (props) => {
  var sets = (e) => {
    e.preventDefault();
    alert('This style selected!')
  }

  // add return/render here
  return (
    <div onClick={sets}>
      <div className="indStyle">
        <ul> <strong>Choose Style:</strong></ul>
        <ul> {props.name}</ul>
      </div>
    </div>
  )

}

export default IndStyle;