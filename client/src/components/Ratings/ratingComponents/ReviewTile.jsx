import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Stars from './Stars.jsx';
import { ImCheckmark } from 'react-icons/im';

var ReviewTile = (props) => {

  var review = props.review; // review = {rating: , date: , ...}
  // Return each review for a particular product
  // console.log(review);
  var time = new Date(review.date);
  var month = new Intl.DateTimeFormat("en-US", { month: 'long' }).format(time);
  var year = time.getFullYear();
  var date = time.getUTCDate(); //
  var adjDate = month + ' ' + date + ', ' + year;
  var usernameAndAdjDate = review.reviewer_name + ', ' + adjDate;

  return (
    <div className='reviewTile'>
      <div className='star-user-date'>
        <Stars singleRating={review.rating} />
        <div className='date'>{usernameAndAdjDate}</div>
      </div>
      <div className='reviewtile-summary'>{review.summary}</div>
      <div className='reviewtile-body'>{review.body}</div>
      {review.recommend && <div className='reviewtile-recommend'><ImCheckmark color='green' /> I recommend this product</div>}
      {review.response &&
        <div>
          <div>Response from seller</div>
          <div>{review.response}</div>
        </div>}
      <div className='helpful-yes-report'>
        <div className='reviewtile-helpful'>Helpful?</div>
        <div className='reviewtile-yes'>Yes</div>
        <div className='reviewtile-count'>({review.helpfulness}) |</div>
        <div className='reviewtile-report'>Report</div>
      </div>
      <hr style={{ color: 'black' }} />
    </div>
  )
}

export default ReviewTile;
