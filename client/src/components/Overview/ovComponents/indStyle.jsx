import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

var IndStyle = (props) => {
  console.log('indstylpr', props)

  // add return/render here
  return (
    <div>{props.name}, ${props.price}</div>
  )

}

export default IndStyle;