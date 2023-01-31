import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

var Overlay = (props) => {
  const [combinedFeaturesNoDupes, setCombinedFeaturesNoDupes] = useState([]);

  useEffect(() => {
    var combinedFeaturesMaybeDupes = props.currentProductFeatures.concat(props.selectedRelatedProductFeatures);

    var uniqueFeatures = [...new Set(combinedFeaturesMaybeDupes)];

    setCombinedFeaturesNoDupes(uniqueFeatures);
  }, [props.currentProductFeatures, props.selectedRelatedProductFeatures]);

  var features = combinedFeaturesNoDupes.map((feature, index) => {
    return (
      <ul key={index}>{feature}</ul>
    )
  })

  return (
    <div className="overlay-background">
      <div className="overlay-container">
        <button onClick={() => { props.setStarButtonClick(!props.starButtonClick) }} className="overlay-close-button">X</button>
        <p className="overlay-container-title">Comparing</p>
        <div>
          <div>
            <h4>Current Product Name -- change this</h4>
            {/* {currentProductCheckmarks} */}
          </div>
          <div>
            {features}
          </div>
          <div>
            <h4>Related Product Name -- change this</h4>
            {/* {selectedRelatedProductCheckmarks} */}
          </div>
        </div>
      </div>
    </div >
  )

};

export default Overlay;