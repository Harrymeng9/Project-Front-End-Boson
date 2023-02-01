import React from 'react';
import { ImCheckmark } from 'react-icons/im';


var Feature = (props) => {
  // if in both, place checkmark on both sides
  // if the feature is present in current product features, place checkmark on left
  // if the feature is present in selected related product features, place checkmark on right
  if (props.currentProductFeatures.includes(props.feature) && props.selectedRelatedProductFeatures.includes(props.feature)) {
    return (
      <>
        <ImCheckmark color="purple" /><p>{props.feature}</p><ImCheckmark color="purple" />
      </>
    )
  } else if (props.currentProductFeatures.includes(props.feature)) {
    return (
      <>
        <ImCheckmark color="purple" /><p>{props.feature}</p><div></div>
      </>
    )
  } else if (props.selectedRelatedProductFeatures.includes(props.feature)) {
    return (
      <>
        <div></div><p>{props.feature}</p><ImCheckmark color="purple" />
      </>
    )
  }

  return (
    <ul>this will be a feature</ul>
  )
};

export default Feature;