import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { ImStarFull, ImCircleRight, ImCircleLeft } from 'react-icons/im';

var GalleryCarousel = (props) => {
  //props.firstWindowPic is the current state
  //props.setWindowPic sets the new state
  //props.urlArray is the total array of URLS

  var none = 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'

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

  let picRender = () => {
    return (
      props.firstWindowPic === null ?
      <div className="galleryOverhead">
        <div><img className="mainPic" alt="loadedPic" src={none}></img></div>

      </div>
      :
      <div className="galleryOverhead">
        <ImCircleLeft size="32px" className="OVcarousel-button-left" onClick={leftShift} />
        <div><img className="mainPic" src={props.firstWindowPic} onClick={(e) => window.open(props.firstWindowPic)}></img></div>
        <ImCircleRight size="32px" className="OVcarousel-button-right" onClick={rightShift} />
      </div>
    )
  }

  // add return/render here

  useEffect(() => {
    picRender();
  }, [props.firstWindowPic])

  return picRender();
  }


export default GalleryCarousel;