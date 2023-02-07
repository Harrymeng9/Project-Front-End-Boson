import React from 'react';
import { useState, useEffect } from 'react';
import { ImCircleRight, ImCircleLeft } from 'react-icons/im';


var YourOutfitCarousel = (props) => {

  const [snapshot, setSnapshot] = useState(null);
  const [indices, setIndices] = useState([]);
  const [length, setLength] = useState(0);

  useEffect(() => {
    setLength(props.cards.length);
    setSnapshot(props.cards.slice(0, 4));
    setIndices([0, 4]);
  }, [props.cards]);

  var shiftLeft = () => {
    var copy = props.cards.slice();
    if (copy.length > 4 && copy[indices[0] - 1] !== undefined) {
      setIndices([indices[0] - 1, indices[1] - 1]);
      setSnapshot(copy.slice(indices[0] - 1, indices[1] - 1));
    }
  };

  var shiftRight = () => {
    var copy = props.cards.slice();
    if (copy.length > 4 && copy[indices[1] + 1] !== undefined) {
      setIndices([indices[0] + 1, indices[1] + 1]);
      setSnapshot(copy.slice(indices[0] + 1, indices[1] + 1));
    }
  };

  var handleAddToOutfitCardClick = () => {

  };

  return (
    <div className="carousel">
      {(length > 4 && indices[0] >= 1) ? <ImCircleLeft size="32px" className="carousel-button-left" onClick={shiftLeft} /> : null}
      <div className="carousel-items">
        <div className="add-to-your-fit-card">
          <img className="default-add" onClick={handleAddToOutfitCardClick} src="https://icons.veryicon.com/png/o/miscellaneous/standard-general-linear-icon/plus-60.png"></img>
          <center>
            <p>Add to Outfit</p>
          </center>
        </div>
        {snapshot}
      </div>
      {(length > 4 && (indices[1] + 1 < length)) ? <ImCircleRight size="32px" className="carousel-button-right" onClick={shiftRight} /> : null}
    </div>
  )

};

export default YourOutfitCarousel;