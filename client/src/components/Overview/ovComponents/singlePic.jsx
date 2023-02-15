import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

var SinglePic = (props) => {
  // add return/render here
  var noPics = (props.full === null) && (props.thumb === null);

  let picClick = (e) => {
    e.preventDefault();
    props.setBigPic(e.target.currentSrc);
    props.setWindowPic(e.target.id);
  }

  return (
    noPics ?
    <div>
      <h3>No Pics to show</h3>
    </div> :

    <div className="singlePic" onClick={picClick}>
      <a href={props.full} target="_blank"><img className="thumbNail" alt="smallPic" src={props.thumb} id={props.full}/></a>
    </div>
  )

}

export default SinglePic;