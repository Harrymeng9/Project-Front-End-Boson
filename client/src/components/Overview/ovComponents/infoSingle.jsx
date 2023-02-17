import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import FeaturesList from './featuresList.jsx';
import Stars from 'react-star-ratings';
import { ImStarFull } from 'react-icons/im';

var InfoSingle = (props) => {
  // add return/render here

  // localStorage.setItem(props.productId, props.productId);
  //   props.setYourOutfitProducts({ ...localStorage });

  let outfit = (e) => {
    alert('Added to your styles!');
    localStorage.setItem(props.id, props.id.toString());
    props.setYourOutfitProducts({ ...localStorage });
  }

  let starRenders = (rates) => {
    return (
      <div>
        <Stars
          starRatedColor='gold'
          rating={rates}
          starDimension='20px'
          starSpacing='3px' />
      </div>
    )
  }

  return (
    props === undefined ?
      <div>Loading the Product</div> :

      <div className="overview-details">
        <div className="productInfo">
          <h3>Product Category: {props.category} <button onClick={outfit}><ImStarFull /></button></h3>
          <div ><span className="productRating"> {starRenders(props.ratings)} </span></div>
          <div>{props.slogan}</div>
          <div>{props.description}</div>
        </div>
        <FeaturesList features={props.features} key={props.id} id={props.id} />
      </div>
  )
}

export default InfoSingle;