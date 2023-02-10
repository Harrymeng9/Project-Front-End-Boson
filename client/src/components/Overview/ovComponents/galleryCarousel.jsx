import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

var GalleryCarousel = (props) => {
  //props.firstWindowPic is the current state
  //props.setWindowPic sets the new state
  //props.urlArray is the total array of URLS

  let func = props.setWindowPic;

  let leftShift = (e) => {
    var currentIndex = props.urlArray.indexOf(props.firstWindowPic)
    if (currentIndex === 0) {
      func(props.urlArray[props.urlArray.length - 1])
    } else {
      func(props.urlArray[currentIndex - 1]);
    }
  }

  let rightShift = (e) => {
    var currentIndex = props.urlArray.indexOf(props.firstWindowPic)
    if (currentIndex === props.urlArray.length - 1) {
      func(props.urlArray[0])
    } else {
      func(props.urlArray[currentIndex + 1])
    }
  }


  // add return/render here
    return (
      props.urlArray.length === 0 ?
      <div>Loading the Product</div> :

      <div><button onClick={leftShift}>LEFT</button>
      <button onClick={rightShift}>RIGHT</button>
      <img className="mainPic" src={props.firstWindowPic} onClick={(e) => window.open(props.firstWindowPic)}></img>
      </div>
    )
  }


export default GalleryCarousel;