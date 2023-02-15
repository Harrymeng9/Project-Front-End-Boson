import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

var IndStyle = (props) => {

  let finalizer = (e) => {
    e.preventDefault();
    props.func(props.style)
  }

  let onSale = () => {
    if (props.sale) {
      return (
        <div onClick={finalizer}>
          <div className="indStyle">
            <ul> <strong>{props.name}</strong></ul>
            <ul>$<del>{props.price}</del> <ins>{props.sale}</ins></ul>
          </div>
        </div>
      )
    } else {
      return (
        <div onClick={finalizer}>
          <div className="indStyle">
            <ul> <strong>{props.name}</strong></ul>
            <ul> ${props.price}</ul>
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

export default IndStyle;