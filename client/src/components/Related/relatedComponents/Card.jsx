// The Card component will be used for both the "related products" cards and the "my outfit" cards
import React from "react";

var Card = (props) => {
  console.log('card props', props);
  /* will need: product category, product name, price, star rating,
  product preview image, an x or a star in top right corner, depending
  on which type of card (related product or outfit) */

  return (
    <div id="card">
      <li>{props.name}</li>
      <li>{props.category}</li>
      <li>{props.price}</li>
    </div>
  )
};

export default Card;
