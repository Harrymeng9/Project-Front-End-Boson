import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Feature from './Feature.jsx';


var Overlay = (props) => {


  const [combinedFeaturesNoDupes, setCombinedFeaturesNoDupes] = useState([]);

  useEffect(() => {
    var combinedFeaturesMaybeDupes = props.currentProductFeatures.concat(props.selectedRelatedProductFeatures);

    var uniqueFeatures = [...new Set(combinedFeaturesMaybeDupes)];

    setCombinedFeaturesNoDupes(uniqueFeatures);
  }, [props.currentProductFeatures, props.selectedRelatedProductFeatures]);

  var features = combinedFeaturesNoDupes.map((feature, index) => {

    return (
      <div className="overlay-features" key={index}>
        <Feature feature={feature} currentProductFeatures={props.currentProductFeatures} selectedRelatedProductFeatures={props.selectedRelatedProductFeatures} />
      </div>
    )
  });


  return (
    <div className="overlay-background">
      <div className="overlay-container">
        <button onClick={() => { props.setStarButtonClick(!props.starButtonClick) }} className="overlay-close-button">X</button>
        <p className="overlay-container-title">Comparing</p>
        <div className="overlay-information">
          <div className="overlay-items">
            <div>
              <h4>{props.currentProductName}</h4>
            </div>
            <div className="overlay-padding"></div>
            <div>
              <h4>{props.selectedRelatedProductName}</h4>
            </div>
          </div>
          <div>
            <div>{features}</div>
          </div>
        </div>
      </div>
    </div >
  )

};

export default Overlay;