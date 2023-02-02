import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import InfoSingle from './infoSingle.jsx'

var InfoList = (props) => {
  //confirm if props are being passed
  // const [prodInfo, setInfo] = useState([]);
  var single = props.info;
  // add return/render here
  if (props === undefined) {
    return (
      <div>Loading the Product</div>
    )
  } else {
    return (
      <div>
        <div>
          {single.map(block => {
            return (
              <InfoSingle name={block.name} category={block.category} description={block.description}
              key={block.id} id={block.id} default_price={block.default_price} slogan={block.slogan} features={block.features} />
            )
          }

          )}
        </div>
      </div>
    )

  }
}

export default InfoList;
