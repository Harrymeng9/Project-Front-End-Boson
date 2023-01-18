import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

var ReviewTile = (props) => {
  // Take the second result as an example
  var results = props.reviewsList.results;
  return (
    <div>
      <div>Review Tile</div>
      <div>Rating: {results[2].rating}</div>
      <div>Date: {results[2].date}</div>
      <div>Summary: {results[2].summary}</div>
      <div>Body: {results[2].body}</div>
      <div>Recommend: {results[2].recommend}</div>
      <div>Reviewer: {results[2].reviewer_name}</div>
      <div>Response: {results[2].response}</div>
      <div>Helpful: {results[2].helpfulness}</div>
    </div>
  )
}

export default ReviewTile;
