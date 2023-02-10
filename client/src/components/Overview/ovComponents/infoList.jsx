import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import InfoSingle from './infoSingle.jsx'

var InfoList = (props) => {
  var single = props.info;
  // add return/render here

  if (props.info.length === 0) {
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
                key={block.id} id={block.id} default_price={block.default_price} slogan={block.slogan}
                features={block.features} ratings={props.ratings} yourOutfitProducts={props.yourOutfitProducts}
                setYourOutfitProducts={props.setYourOutfitProducts}/>
            )
          }
          )}
        </div>
      </div>
    )
  }
}

export default InfoList;
