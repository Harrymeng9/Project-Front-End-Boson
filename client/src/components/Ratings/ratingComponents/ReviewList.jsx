import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx';

var ReviewList = (props) => {

  return (
    <div>
      <div>Review List</div>
      <div>
        <ReviewTile reviewsList={props.reviewsList} />
      </div>
    </div>
  )
}

export default ReviewList;
