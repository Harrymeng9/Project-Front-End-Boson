import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

var FirstStyle = (props) => {

  let finalizer = (e) => {
    e.preventDefault();
    props.func(props.style)
  }

  // add return/render here
  let onSale = () => {
    if (props.sale) {
      return (
        <div onClick={finalizer}>
          <div className="firstStyle">
            <span>&#10003;
              <ul> <strong>{props.name}</strong></ul>
              <ul><strong>$<del>{props.price}</del> <ins>{props.sale}</ins></strong></ul>
            </span>
          </div>
        </div>
      )
    } else {
      return (
        <div onClick={finalizer}>
          <div className="firstStyle">
            <span>&#10003;
              <ul> <strong>{props.name}</strong></ul>
              <ul> <strong>{props.price}</strong></ul>
            </span>
          </div>
        </div>
      )
    }
  }

  useEffect(() => {
    onSale()
  }, [props])

  return onSale();


}

export default FirstStyle;