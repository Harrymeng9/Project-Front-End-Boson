import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import FeatureSingle from './featureSingle.jsx';

var FeaturesList = (props) => {
  var features = props.features;
  var id = 0;

  // add return/render here
    return (
      props === undefined ?
      <div>Loading the Product</div> :

      <div>
        <h3>Product Features</h3>
      {features.map(block => {
        return (
          <FeatureSingle feat={block.feature} value={block.value} key={id += 1}/>
        )
      }
      )}
    </div>
    )
  }


export default FeaturesList;