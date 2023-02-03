import React from 'react';
import { useState, useEffect } from 'react';
import { ImCircleRight, ImCircleLeft } from 'react-icons/im';


var CardCarousel = (props) => {

  const [snapshot, setSnapshot] = useState(null);
  const [indices, setIndices] = useState([]);
  const [length, setLength] = useState(0);

  useEffect(() => {
    setLength(props.cards.length);
    setSnapshot(props.cards.slice(0, 5));
    setIndices([0, 5]);
  }, [props.cards]);

  var shiftLeft = () => {
    var copy = props.cards.slice();
    if (copy.length > 5 && copy[indices[0] - 1] !== undefined) {
      setIndices([indices[0] - 1, indices[1] - 1]);
      setSnapshot(copy.slice(indices[0] - 1, indices[1] - 1));
    }
  };

  var shiftRight = () => {
    var copy = props.cards.slice();
    if (copy.length > 5 && copy[indices[1] + 1] !== undefined) {
      setIndices([indices[0] + 1, indices[1] + 1]);
      setSnapshot(copy.slice(indices[0] + 1, indices[1] + 1));
    }
  };

  return (
    <div className="related-carousel">
      {(length > 5 && indices[0] >= 1) ? <ImCircleLeft size="32px" className="carousel-button-left" onClick={shiftLeft} /> : null}
      <div className="related-carousel-items">
        {snapshot}
      </div>
      {(length > 5 && indices[1] <= props.cards.length) ? <ImCircleRight size="32px" className="carousel-button-right" onClick={shiftRight} /> : null}
    </div>
  )
};

export default CardCarousel;
