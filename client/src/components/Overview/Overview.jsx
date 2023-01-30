import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import AddCart from './ovComponents/addCart.jsx';
import Gallery from './ovComponents/gallery.jsx';
import InfoList from './ovComponents/infoList.jsx';
import StyleSelect from './ovComponents/styleSelect.jsx';

var truth = false;

var Overview = () => {


  //add the useState parameters here
  const [SKUS, setProds] = useState([]);
  const [skuInfo, setInfo] = useState([])


  // //add the axios get here
  var productGet = () => {
    axios.get('/products')
    .then (info => {
      setProds(info.data);
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
    }
    setInfo(saver);
  }

  let loader = () => {
    //checks and runs the setter function on page render only once
    if (truth === false) {
      setter();
      truth = true;
    }
    //returns the components when finally called
    return (
      <div>
      <div>Product Overview </div>
     <div>{skuInfo.length > 0 && <InfoList info={skuInfo}/>}</div>
      <AddCart cart={SKUS}/>
      <Gallery pics={SKUS}/>
      <StyleSelect styles={SKUS}/>
      <div>---------------------------------------</div>
    </div>
    )
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
    return loader();
  }

}

export default Overview;