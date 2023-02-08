import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import SinglePic from './singlePic.jsx';

var Gallery = (props) => {
  //confirm if props are being passed down

  var thumbnail = props.pics[0].thumbnail_url;
  var url = props.pics[0].url;
  var id = 0;

  //add return/render here
  return (
    <div className="gallery">
      <strong>Image Gallery</strong>
      {props.pics.map(block => {
        return (
          <SinglePic full={block.url} thumb={block.thumbnail_url} key={id += 1} setBigPic={props.setBigPic}/>
        )
      })}
    </div>
  )
}

export default Gallery;