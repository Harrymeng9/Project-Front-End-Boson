import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import InfoList from './ovComponents/infoList.jsx';
import StyleSelect from './ovComponents/styleSelect.jsx';

var truth = false;

var Overview = (props) => {
  //add the useState parameters here
  const [SKUS, setProds] = useState([]);
  const [skuInfo, setInfo] = useState([]);
  const [currentStyle, setStyle] = useState([]);
  const [related, setRelated] = useState([]);
  const [initial, setInitial] = useState([]);
  const [intStyle, setIntStyle] = useState([]);

  // //add the axios get here
  var productGet = () => {
    axios.get('/products')
      .then(info => {
        setProds(info.data);
      })
      .catch(err => console.log(err))
  }

  // first item to render //
  var initialFetch = () => {
    return axios.get(`/products/${props.initial}`)
      .then(data => {
        setInitial([data.data]);
      })
      .catch(err => console.log(err));
  }

  var firstStyle = () => {
    return axios.get(`/products/${props.initial}/styles`)
      .then(data => {
        setIntStyle(data.data.results);
      })
      .catch(err => console.log(err));
  }


  ///////////////////////////////////////////
  // single item //
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
        .then(a => {
          saver.push(a);
        })
    }
    setInfo(saver);
  }

  // single style //
  var styleFetcher = (id) => {
    return axios.get(`/products/${id}/styles`)
      .then(data => {
        return data.data;
      })
      .catch(err => console.log(err));
  }

  let styler = async () => {
    var saver = [];
    for (var i = 0; i < SKUS.length; i++) {
      await styleFetcher(SKUS[i].id)
        .then(a => {
          saver.push(a);
        })
    }
    setStyle(saver);
  }

  // related items//
  var relatedFetcher = (id) => {
    return axios.get(`/products/${id}/related`)
      .then(data => {
        return data.data;
      })
      .catch(err => console.log(err));
  }

  let relations = async () => {
    var saver = [];
    for (var i = 0; i < SKUS.length; i++) {
      await relatedFetcher(SKUS[i].id)
        .then(a => {
          saver.push(a);
        })
    }
    setRelated(saver);
  }

  // click function to set the style as the first/default style
  let sets = (styleID) => {
    var redone = [];
    var copy = intStyle.slice(0)
    for (var i = 0; i < copy.length; i++) {
      if (copy[i].style_id === styleID) {
        redone.push(copy[i]);
        delete copy[i];
        break;
      }
    }
    copy.forEach(e => {
      redone.push(e);
    })
    setIntStyle(redone);
  }


  // create a function that calls the axios requests on load
  let loader = () => {
    //checks and runs the setter function on page render only once
    if (truth === false) {
      setter();
      styler();
      relations();
      initialFetch();
      firstStyle();
      truth = true;
    }
    //returns the components when finally called
    return (
      <div>
        <h2>Product Overview </h2>
        <div>{<InfoList info={initial} styles={currentStyle} />}</div>
        <StyleSelect styles={intStyle} id={props.initial} clickfunc={sets}/>
      </div>
    )
  }

  //this is to crate a faux loading screen while the state is being set.
  //if the state is set, then we can fully render the app
  if (props === undefined) {
    return (
      <div>Loading your products</div>
    )
  } else {
    return loader();
  }

}

export default Overview;