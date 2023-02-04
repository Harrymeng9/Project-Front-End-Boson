import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

var IndStyle = (props) => {

  // add return/render here
  return (
    <div>
      <div className="indStyle">
        <ul> <strong>Choose Style:</strong></ul>
        <ul> {props.name}</ul>
      </div>
    </div>
  )

}

export default IndStyle;