import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx';

var ReviewList = (props) => {

  // var options = ['Relevant', 'Helpful', 'Newest'];

  // Return a list of reviews for a particular product
  return (
    <div>
      <div>Sorting</div>
      <div> 248 reviews, sorted by relevant &nabla;</div>
      <br></br>
      {/* <Dropdown options={options} defaultValue = {options[0]} value = {options[0]}></Dropdown> */}
      {/* <select>
          <option value='Relevant'>Relevant</option>
          <option value='Helpful'>Helpful</option>
          <option value='Newest'>Newest</option>
        </select> */}
      <div>Review List</div>
      {props.reviewsList.results.map((result, i) => {
        return (
          <div key={i}>
            <ReviewTile review={result} />
            <br></br>
          </div>
        )
      })}
      <button>MORE REVIEWS</button>
      <button>ADD A REVIEW + </button>
    </div>
  )
}

export default ReviewList;
