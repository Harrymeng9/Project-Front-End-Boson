import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

var Info = (props) => {
  //confirm if props are being passed
  // const [prodInfo, setInfo] = useState([]);
  //console.log('info props', props)
  console.log('info props', props.info)

  // var infoFetcher = function(id) {
  //   axios.get('/products' + '/' + id)
  //   .then (data => {
  //     console.log('infodata', info)
  //   })
  //   .catch(err => console.log(err))
  //   console.log('sad trombone noises')
  // }

  // useEffect to call the fetcher
//infoFetcher(71701)


  //add return/render here
  return (
    <div>
      <div>category</div>
      <div>name</div>
      <div>price</div>
      <button onClick={() => {alert('Added to you styles')}}>STAR</button>
    </div>
    // <div>{props.things.default_price}</div>
  )

}

export default Info;

/*
return (
  <div>
    <div>{props.things.category}</div>
    <div>{props.things.name}</div>
    <div>{props.things.default_price}</div>
    <button onClick={() => {alert('Added to you styles')}}>STAR</button>
  </div>
  // <div>{props.things.default_price}</div>
)
*/