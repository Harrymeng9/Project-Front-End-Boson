import React from 'react';
import { useState, useEffect } from 'react';


var CardCarousel = (props) => {
  console.log('related cards length', props.cards);


  const [snapshot, setSnapshot] = useState(null);
  const [indices, setIndices] = useState([]);

  console.log('indices', indices);
  console.log('snapshot', snapshot);


  useEffect(() => {
    setSnapshot(props.cards.slice(0, 5));
    setIndices([0, 5]);
  }, [props.cards]);

  var shiftLeft = () => {
    console.log('left button clicked!');
    // first button click left after right can't find first element (jacket girl for blue suede shoes)
    var copy = props.cards.slice();
    if ((copy.length <= 5) || copy[indices[0] - 1] === undefined) {
      console.log('Cannot shift left any further!');
    } else if (copy.length > 5 && copy[indices[0] - 1] !== undefined) {
      setIndices([indices[0] - 1, indices[1] - 1]);
      setSnapshot(copy.slice(indices[0] - 1, indices[1] - 1));
    }
  };

  var shiftRight = () => {
    // first button click doesn't do anything?
    console.log('right button clicked!');
    var copy = props.cards.slice();
    if (copy.length <= 5 || copy[indices[1] + 1] === undefined) {
      console.log('Cannot shift right any further!');
      // will need to hide the right button at this point
    } else if (copy.length > 5 && copy[indices[1] + 1] !== undefined) {
      console.log('indices in shiftRight', indices);
      setIndices([indices[0] + 1, indices[1] + 1]);
      console.log('right after setIndeigkfgdbjhf', indices);
      // the above need to happen and re-render before the below should happen
      setSnapshot(copy.slice(indices[0] + 1, indices[1] + 1));

    }
  };


  return (
    <div className="related-carousel">
      <button className="carousel-button-left" onClick={shiftLeft}>Left</button>
      <div className="related-carousel-items">
        {snapshot}
      </div>
      <button className="carousel-button-right" onClick={shiftRight}>Right</button>
    </div>
  )
};

export default CardCarousel;

/*
STEPS:


*/