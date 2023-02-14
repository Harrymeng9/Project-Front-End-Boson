import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import SinglePic from './singlePic.jsx';
import { ImCircleRight, ImCircleLeft } from 'react-icons/im';

var Gallery = (props) => {
  //confirm if props are being passed down

  const [fivePics, setFive] = useState((props.pics.slice(0, 5)));
  const [indexes, setIndexes] = useState({start: 0, end: 5})

  var id = 0;

  let leftClick = (e) => {

    if (indexes.start !== 0) {
      indexes.start--;
      indexes.end--;
      // setFive((props.pics.slice(start, end)))
    }
    setFive((props.pics.slice(indexes.start, indexes.end)))
  }

  let rightClick = (e) => {

    if (indexes.end !== props.pics.length - 1) {
      indexes.start++;
      indexes.end++;
      // setFive((props.pics.slice(start, end)))
    }
    setFive((props.pics.slice(indexes.start, indexes.end)))
  }


  let doIMakeAButton = () => {
    var render = props.pics.length > 7;
    if (render === false) {
      return (
        <div className="gallery">
          <strong>Image Gallery</strong>
          {props.pics.map(block => {
            return (
              <SinglePic full={block.url} thumb={block.thumbnail_url} key={id += 1}
              setBigPic={props.setBigPic} setWindowPic={props.setWindowPic}/>
            )
          })}
        </div>

      )
    } else  if (render === true) {

      return (
        <div className="gallery">
          <strong>Image Gallery</strong>
          <div className="galleryScroll">
            <button><ImCircleLeft size="32px" className="OVcarousel-button-left" onClick={leftClick} /></button>
          {fivePics.map(block => {
            return (
              <SinglePic full={block.url} thumb={block.thumbnail_url} key={id += 1}
              setBigPic={props.setBigPic} setWindowPic={props.setWindowPic}/>
            )
          })}
          <button><ImCircleRight size="32px" className="OVcarousel-button-right" onClick={rightClick} /></button>
          </div>



        </div>
      )
    }
  }

  useEffect(() => {
    doIMakeAButton();
    leftClick();
    rightClick();
  }, [props.pics])

  //add return/render here
  return doIMakeAButton();

}

export default Gallery;