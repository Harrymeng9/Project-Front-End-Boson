// The Related component will display both the "related products" carousel and the "my outfit" carousel
import React from 'react';
import { useState, useEffect } from "react";
import Card from './relatedComponents/Card.jsx';

var Related = () => {

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [myOutfit, setMyOutfit] = useState([]);

  // on initial render, set related products and default card for my outfit
  // url for requests to API:  https://app-hrsei-api.herokuapp.com/api/fec2/:hr-rpp/whateverroute
  // GET /products/:product_id/related

  return (
    <div>
      <div>
        {products}
      </div>
      <div>
        {myFit}
      </div>
    </div>
  )
};

export default Related;