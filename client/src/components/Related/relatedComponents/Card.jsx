// The Card component will be used for both the "related products" cards and the "my outfit" cards
import React from "react";

var Card = (props) => {
  /* will need: product category, product name, price, star rating,
  product preview image, an x or a star in top right corner, depending
  on which type of card (related product or outfit) */

  return (
    <div id="card">
      <img src={props.image}></img>
      <p>{props.name}</p>
      <p>{props.category}</p>
      <p>{props.price}</p>
    </div>
  )
};

export default Card;
