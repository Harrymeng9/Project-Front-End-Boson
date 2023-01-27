// The Card component will be used for both the "related products" cards and the "my outfit" cards
import React from "react";

var Card = (props) => {
  /* will need: product category, product name, price, star rating,
  product preview image, an x or a star in top right corner, depending
  on which type of card (related product or outfit) */

  return (
    <div class="card">
      <div class="relatedImageContainer">
        <button class="relatedImageButton">Star</button>
        <img class="relatedImage" src={props.image}></img>
      </div>
      <div>
        <p>{props.category}</p>
        <p>{props.name}</p>
        <p>{props.price}</p>
        <p>Star Rating</p>
      </div>
    </div>
  )
};

export default Card;
