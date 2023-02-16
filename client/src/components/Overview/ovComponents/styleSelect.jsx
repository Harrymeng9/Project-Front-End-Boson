import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import IndStyle from './indStyle.jsx';
import Gallery from './gallery.jsx';
import FirstStyle from './firstStyle.jsx';

var StyleSelect = (props) => {
  var first = props.styles[0];
  var rest = props.styles.slice(1);

  return (
    props.styles.length === 0 ?
      <h3> Loading your styles </h3>
      :
          <div >
            <Gallery pics={props.styles[0].photos} setBigPic={props.setBigPic} setWindowPic={props.setWindowPic} />
          <div className="styleCont" >
            <h5>Available Styles</h5>
            <FirstStyle key={first.style_id} name={first.name} price={first.original_price}
            style={first.style_id} func={props.clickfunc} sale={first.sale_price}/>
            {rest.map(x => {
              return (
                <IndStyle key={x.style_id} name={x.name} price={x.original_price}
                style={x.style_id} func={props.clickfunc} sale={x.sale_price}/>
              )
            }
            ) }
          </div>
        </div>
  )
}

export default StyleSelect;