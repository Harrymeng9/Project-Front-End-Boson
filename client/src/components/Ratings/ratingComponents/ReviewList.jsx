import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx';
import Modal from './Modal.jsx';

var ReviewList = (props) => {

  // var options = ['Relevant', 'Helpful', 'Newest'];
  const [reviewsList, setReviewsList] = useState();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    // Select a particular product_id for example
    axios.get('/reviews', { params: { product_id: 71698 } })
      .then((reviewsList) => {
        // console.log('reviewsList', reviewsList.data);
        setReviewsList(reviewsList.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (reviewsList) {
    // Return a list of reviews for a particular product
    return (
      <div id='reviewList'>
        <div>Sorting</div>
        <div> 248 reviews, sorted by relevant &nabla;</div>
        <br></br>
        {/* /* <Dropdown options={options} defaultValue = {options[0]} value = {options[0]}></Dropdown> */
    /* <select>
        <option value='Relevant'>Relevant</option>
        <option value='Helpful'>Helpful</option>
        <option value='Newest'>Newest</option>
      </select> */}
        <div>Review List</div>
        {
          reviewsList.results.map((result, i) => {
            return (
              <div key={i}>
                <ReviewTile review={result} />
                <br></br>
              </div>
            )
          })
        }
        <button>MORE REVIEWS</button>
        <button onClick={(e) => setModal(!modal)}>ADD A REVIEW + </button>
        {modal && <Modal setModal={setModal} modal={modal} />}
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default ReviewList;
