import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import AddCart from './ovComponents/addCart.jsx';
import Gallery from './ovComponents/gallery.jsx';
import Info from './ovComponents/info.jsx';
import StyleSelect from './ovComponents/styleSelect.jsx';

var Overview = () => {

  //add the useState parameters here
  //use a true/false state?
  const [SKUS, setProds] = useState([]);
  const [skuInfo, setInfo] = useState([])

  //add the axios get here
  var productGet = () => {
    axios.get('/products', { params: { product_id: 71698 } })
    .then (info => {
      setProds(info.data);
    })
    .catch(err => console.log(err))
  }
    var infoFetcher = function(id) {

    axios.get('/products', { params: { product_id: 71698 } })
    .then (data => {
      console.log('infodata', data.data)
    })
    .catch(err => console.log(err))
    alert('sad trombone noises')
  }

  //useEffect calling the get
  useEffect(() => {
    productGet();
  }, [])

  //this is to crate a faux loading screen while the state is being set.
  //if the state is set, then we can fully render the app

  if (Object.entries(SKUS).length === 0) {
    return (
      <div>Loading your products</div>
    )
  } else {
    return (
      <div>
        <div>OVERVIEW IS RENDERING </div>
        <Info info={SKUS}/>
        <AddCart cart={SKUS}/>
        <Gallery pics={SKUS}/>
        <StyleSelect styles={SKUS}/>
        <button onClick={(e)=>{
          e.preventDefault();
          infoFetcher('71697')
        }}>BUTTON</button>
        <div>---------------------------------------</div>
      </div>
    )
  }
}

export default Overview;