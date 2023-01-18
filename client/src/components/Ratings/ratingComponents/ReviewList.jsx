import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx';

var ReviewList = (props) => {

  // Return a list of reviews for a particular product
  return (
    <div>
      <div>Review List</div>
      {props.reviewsList.results.map((result, i) => {
        return (
          <div key={i}>
            <ReviewTile review={result} />
            <br></br>
          </div>
        )
      })}
    </div>
  )
}

export default ReviewList;
