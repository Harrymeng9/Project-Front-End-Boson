import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import AddCart from './ovComponents/addCart.jsx';
import Gallery from './ovComponents/gallery.jsx';
import Info from './ovComponents/info.jsx';
import StyleSelect from './ovComponents/styleSelect.jsx';

var Overview = () => {

  //add the useState parameters here
  const [SKUS, setProds] = useState([]);
  const [skuInfo, setInfo] = useState([])

  //add the axios get here
  var productGet = () => {
    axios.get('/products')
    .then (info => {
      setProds(info.data);
    })
    .then(() => {
      setter();
    })
    .catch(err => console.log(err))
  }

  //single item
  var infoFetcher = (id) => {
      return axios.get(`/products/${id}`)
        .then(data => {
          return data.data;
        })
        .catch(err => console.log(err));
  }


  let setter = async () => {
    var saver = [];
    for (var i = 0; i < SKUS.length; i++) {
      await infoFetcher(SKUS[i].id)
      .then (a => {
        saver.push(a);
      })
      setInfo(saver);
    }
  }

  //useEffect calling the get
  useEffect(() => {
    productGet();
  }, [])
  useEffect(() => {
    setter();
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
        <div>Product Overview </div>
       <div>{skuInfo.length > 0 && <Info info={skuInfo}/>}</div>
        <AddCart cart={SKUS}/>
        <Gallery pics={SKUS}/>
        <StyleSelect styles={SKUS}/>
        <button onClick={(e) => {
          e.preventDefault();
          setter()
        }}>TEST</button>
        <div>---------------------------------------</div>
      </div>
    )
  }
}

export default Overview;