// The Card component will be used for both the "related products" cards and the "my outfit" cards
import React from "react";

var Card = (props) => {
  /* will need: product category, product name, price, star rating,
  product preview image, an x or a star in top right corner, depending
  on which type of card (related product or outfit) */

  return (
    <div className="card">
      <div className="relatedImageContainer">
        <button className="relatedImageButton">Star</button>
        <img className="relatedImage" src={props.image}></img>
      </div>
      <div>
        <p className="relatedDetails">{props.category}</p>
        <p className="relatedDetails">{props.name}</p>
        <p className="relatedDetails">{props.price}</p>
        <p className="relatedDetails">Star Rating</p>
      </div>
    </div>
  )
};

export default Card;
