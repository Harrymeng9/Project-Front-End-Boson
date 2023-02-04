import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import IndStyle from './indStyle.jsx';
import Gallery from './gallery.jsx';

var StyleSelect = (props) => {

  return (
    props.styles.length === 0 ?
      <h3> Loading your styles </h3>
      :
          <div >
          <div className="styleCont" >
            {props.styles.map(x => {
              return (
                <IndStyle key={x.style_id} name={x.name} price={x.original_price} style={x.style_id} func={props.clickfunc}/>
              )
            }
            ) }
          </div>
          <Gallery pics={props.styles[0].photos} />
        </div>
  )
}

export default StyleSelect;