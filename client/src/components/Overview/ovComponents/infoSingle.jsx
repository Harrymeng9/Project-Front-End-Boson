import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import FeaturesList from './featuresList.jsx';
import Stars from 'react-star-ratings';
import { ImStarFull } from 'react-icons/im';

var InfoSingle = (props) => {
  // add return/render here

  let starRenders = (rates) => {
    return (
      <div>
        <Stars
          starRatedColor = 'gold'
          rating = {rates}
          starDimension = '20px'
          starSpacing = '3px'/>
      </div>
    )
  }

  return (
    props === undefined ?
      <div>Loading the Product</div> :
      <div>
        <h2>{props.name}</h2>
        <div>Product Category: {props.category}</div>
        <div ><span className="productRating"> {starRenders(props.ratings)} </span></div>
        <div>{props.slogan}</div>
        <div>{props.description}</div>
        <FeaturesList features={props.features} key={props.id} id={props.id} />
        <button onClick={() => { alert('Added to your outfit!') }}><ImStarFull /></button>
      </div>
  )
}

export default InfoSingle;

