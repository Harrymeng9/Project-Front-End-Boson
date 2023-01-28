import React from 'react';

var Overlay = (props) => {

  return (
    <div className="overlay-background">
      <div className="overlay-container">
        <button onClick={() => { props.setStarButtonClick(!props.starButtonClick) }} className="overlay-close-button">X</button>
        <p className="overlay-container-title">Comparing</p>
        <div>
          // want to put two divs inside this div: one for the current product's characteristics
        // and one for the characteristics of the product that was clicked on
        </div>
      </div>
    </div >
  )

};

export default Overlay;