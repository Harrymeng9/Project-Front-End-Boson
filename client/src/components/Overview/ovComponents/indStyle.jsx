import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

var IndStyle = (props) => {
  console.log('indstylpr', props)
  var sets = (e) => {
    e.preventDefault();
    alert('This style selected!')
  }

  // add return/render here
  return (
    // <div>
    //   <button onClick={sets}>{props.name}, ${props.price}</button>
    //   </div>

  //   <div className="indStyle">
  //   <a href="https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  //   target="_blank"><img src="https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"/></a>
  // </div>

<div  onClick={sets}>
  <div className="indStyle">
    <ul> <strong>Choose Style:</strong></ul>
<ul> {props.name}</ul>

</div>
</div>

  )

}

export default IndStyle;