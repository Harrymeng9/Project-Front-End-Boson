import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

var GalleryCarousel = (props) => {

  console.log(props)

  // add return/render here
    return (
      props === undefined ?
      <div>Loading the Product</div> :

      <div><img className="mainPic" src={props.firstWindowPic} onClick={(e) => window.open(props.firstWindowPic)}></img></div>
    )
  }


export default GalleryCarousel;