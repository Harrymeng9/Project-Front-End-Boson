import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import IndStyle from './indStyle.jsx';
import Gallery from './gallery.jsx';

var StyleSelect = (props) => {
  //confirm if props are being passed down
  // const [firstStyle, setStyler] = useState([])
  // setStyler()

  //add return/render here
  return (
    props.styles.length === 0 ?
      <h3> Loading your styles </h3>
      : <div >
        <h3>Available Styles for this Product</h3>
        <div className="styleCont">
          {props.styles.map(x => {
            return (
              <IndStyle key={x.style_id} name={x.name} price={x.original_price} />
            )
          }
          )}
        </div>
        <Gallery pics={props.styles[0].photos} />
      </div>
  )
}

export default StyleSelect;