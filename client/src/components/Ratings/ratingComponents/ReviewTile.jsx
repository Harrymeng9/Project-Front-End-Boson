import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {FaStar} from 'react-icons/fa';
import Stars from './Stars.jsx';

var ReviewTile = (props) => {

  var review = props.review; // review = {rating: , date: , ...}
  // Return each review for a particular product
  return (
    <div>
      <Stars singleRating = {review.rating} />
      <div>Date: {review.date}</div>
      <div>Summary: {review.summary}</div>
      <div>Body: {review.body}</div>
      <div>Recommend: {review.recommend}</div>
      <div>Reviewer: {review.reviewer_name}</div>
      <div>Response: {review.response}</div>
      <div>Helpful: {review.helpfulness}</div>
    </div>
  )
}

export default ReviewTile;
