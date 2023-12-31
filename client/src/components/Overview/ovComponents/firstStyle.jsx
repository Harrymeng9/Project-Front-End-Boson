import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { ImCheckmark } from 'react-icons/im';

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
            <ul> <strong> <ImCheckmark/>{props.name}</strong></ul>
            <ul><del className="styleOnSale">${props.price}</del></ul>
            <ul><ins>${props.sale}</ins></ul>
          </div>
        </div>
      )
    } else {
      return (
        <div onClick={finalizer}>
          <div className="firstStyle">
              <ul> <strong><ImCheckmark/> {props.name}</strong></ul>
              <ul> <strong>${props.price}</strong></ul>
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