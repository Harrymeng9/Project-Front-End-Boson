import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

var FeatureSingle = (props) => {

  // add return/render here
  return (
    <div className="indFeatures">{props.feat}: {props.value}</div>
  )

}

export default FeatureSingle;