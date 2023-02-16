import React from 'react';
import { useEffect, useState } from 'react';
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

        <div className="overlay-items">
          <div>
            <h5>{props.currentProductName}</h5>
          </div>
          <div className="overlay-padding"></div>
          <div>
            <h5>{props.selectedRelatedProductName}</h5>
          </div>
        </div>
        <div className="overlay-feats">{features}</div>

      </div>
    </div>
  )

};

export default Overlay;