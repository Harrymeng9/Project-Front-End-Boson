import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx';
import Modal from './Modal.jsx';

var ReviewList = (props) => {

  // var options = ['Relevant', 'Helpful', 'Newest'];
  const [reviewsList, setReviewsList] = useState([]);
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState(1);
  const [newReviews, setNewReviews] = useState([]);

  var fetchReviews = () => {
    axios.get('/reviews', { params: { product_id: props.product_id, page: page } })
      .then((data) => {
        setNewReviews(data.data.results);
        setReviewsList(reviewsList.concat(data.data.results));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  useEffect(() => {
    fetchReviews();
  }, [page])

  if (reviewsList) {
    // Return a list of reviews for a particular product
    return (
      <div id='reviewList'>
        <div className='sort-options'>Sorted by relevant &nabla;</div>
        {/* /* <Dropdown options={options} defaultValue = {options[0]} value = {options[0]}></Dropdown> */
    /* <select>
        <option value='Relevant'>Relevant</option>
        <option value='Helpful'>Helpful</option>
        <option value='Newest'>Newest</option>
      </select> */}

        <div style={{ maxHeight: '800px', overflow: 'auto' }}>
          {
            reviewsList.map((result, i) => {
              return (
                <div key={i}>
                  <ReviewTile review={result} />
                </div>
              )
            })
          }
        </div>
        {newReviews.length === 2 && <button onClick={(e) => setPage(page + 1)}>MORE REVIEWS</button>}
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
