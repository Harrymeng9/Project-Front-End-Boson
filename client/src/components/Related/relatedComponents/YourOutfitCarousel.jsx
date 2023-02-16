import React from 'react';
import { useState, useEffect } from 'react';
import { ImCircleRight, ImCircleLeft } from 'react-icons/im';


var YourOutfitCarousel = (props) => {

  const [snapshot, setSnapshot] = useState(null);
  const [indices, setIndices] = useState([]);
  const [length, setLength] = useState(0);
  const [addToOutfitCardIsPresent, setAddToOutfitCardIsPresent] = useState(true);
  const [snapshotLength, setSnapshotLength] = useState(4);

  useEffect(() => {
    setLength(props.cards.length);
    setSnapshot(props.cards.slice(0, 4));
    setIndices([0, 4]);
  }, [props.cards.length]);  // should be re-rendering whenever the size of the card deck changes... but doesn't

  var shiftLeft = () => {
    var copy = props.cards.slice();
    if (indices[0] === 1) {
      setIndices([indices[0] - 1, indices[1] - 2]);
      setSnapshot(copy.slice(indices[0] - 1, indices[1] - 2));
      setSnapshotLength(4);
    } else {
      setIndices([indices[0] - 1, indices[1] - 1]);
      setSnapshot(copy.slice(indices[0] - 1, indices[1] - 1));
    }
  };

  var shiftRight = () => {
    var copy = props.cards.slice();
    if ((indices[1] === 4) && (indices[0] === 0) && (copy[indices[1]] !== undefined)) {
      setIndices([indices[0] + 1, indices[1] + 2]);
      setSnapshot(copy.slice(indices[0] + 1, indices[1] + 2));
      setSnapshotLength(5);
    } else if ((indices[1] > 4) && (indices[0] !== 0) && (copy[indices[1]] !== undefined)) {
      setIndices([indices[0] + 1, indices[1] + 1]);
      setSnapshot(copy.slice(indices[0] + 1, indices[1] + 1));
    }
  };

  var handleAddToOutfitCardClick = () => {

    localStorage.setItem(props.productId, props.productId);
    props.setYourOutfitProducts({ ...localStorage });

  };

  return (
    <div className="your-outfit-carousel">
      {(length > 4 && indices[0] >= 1) ? <ImCircleLeft size="32px" className="your-outfit-carousel-button-left" onClick={shiftLeft} /> : null}
      {snapshotLength === 5 ? <div className="your-outfit-carousel-items">{snapshot}</div> : <div className="your-outfit-carousel-items"><div className="add-to-your-fit-card">
        <img className="default-add" onClick={handleAddToOutfitCardClick} src="https://icons.veryicon.com/png/o/miscellaneous/standard-general-linear-icon/plus-60.png"></img>
        <div className="add-to-outfit">
          <p>Add Item to Outfit</p>
        </div>
      </div>{snapshot}</div>
      }
      {(length > 4 && (indices[1] + 1 <= length)) ? <ImCircleRight size="32px" className="your-outfit-carousel-button-right" onClick={shiftRight} /> : null}
    </div >
  )
};

export default YourOutfitCarousel;