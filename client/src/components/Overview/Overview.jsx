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

    //create local variables so we can see how they're being accessed
    var category;
    var default_price;
    var description;
    var name;
    var slogan;

  //add the axios get here
  var productGet = () => {
    axios.get('/products')
    .then (info => {
      console.log(info)
      setProds(info.data);
    })
    .catch(err => console.log(err))
  }

  //useEffect calling the get here
  useEffect(() => {
    productGet();
  }, [])

  console.log(SKUS)

  //add return/render here
  return (
    <div>
      <div>OVERVIEW IS RENDERING </div>
      <Info things={SKUS[0]}/>
      <AddCart/>
      <Gallery/>
      <StyleSelect/>
      <div>---------------------------------------</div>
    </div>
  )

}

export default Overview;