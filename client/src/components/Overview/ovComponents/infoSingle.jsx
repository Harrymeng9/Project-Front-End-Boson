import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import FeaturesList from './featuresList.jsx';

var InfoSingle = (props) => {

  // add return/render here
  if (props === undefined) {
    return (
      <div>loading</div>
    )
  } else {
    return (
      <div>
        <h2>{props.name}</h2>
        <div>Product Category: {props.category}</div>
        <div>${props.default_price}</div>
        <div>{props.slogan}</div>
        <div>{props.description}</div>
        <FeaturesList features={props.features} key={props.id} id={props.id}/>
        <button onClick={() => { alert('Added to you styles') }}>⭐️</button>
      </div>
    )
  }
}

export default InfoSingle;