import React from 'react';
import { ImCheckmark } from 'react-icons/im';


var Feature = (props) => {
  if (props.currentProductFeatures.includes(props.feature) && props.selectedRelatedProductFeatures.includes(props.feature)) {
    return (
      <>
        <ImCheckmark color="purple" /><p>{props.feature}</p><ImCheckmark color="purple" />
      </>
    )
  } else if (props.currentProductFeatures.includes(props.feature)) {
    return (
      <>
        <ImCheckmark color="black" /><p>{props.feature}</p><div></div>
      </>
    )
  } else if (props.selectedRelatedProductFeatures.includes(props.feature)) {
    return (
      <>
        <div></div><p>{props.feature}</p><ImCheckmark color="black" />
      </>
    )
  }
};

export default Feature;