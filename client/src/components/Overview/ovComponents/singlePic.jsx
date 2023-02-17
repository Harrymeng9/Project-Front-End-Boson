import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

var SinglePic = (props) => {
  // add return/render here
  var noPics = (props.full === null) && (props.thumb === null);

  var none = 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'

  let picClick = (e) => {
    e.preventDefault();
    props.setBigPic(e.target.currentSrc);
    props.setWindowPic(e.target.id);
  }

  return (
    noPics ?
    <div className="singlePic">
      <img className="thumbNail" alt="smallPic" src={none}/>
    </div>
    :

    <div className="singlePic" onClick={picClick}>
      <a href={props.full} target="_blank"><img className="thumbNail" alt="smallPic" src={props.thumb} id={props.full}/></a>
    </div>
  )

}

export default SinglePic;