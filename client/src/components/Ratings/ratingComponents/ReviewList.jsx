import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx';
import Modal from './Modal.jsx';

var ReviewList = (props) => {

  const [reviewsList, setReviewsList] = useState([]);
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState(1);
  const [newReviews, setNewReviews] = useState([]);
  const [sort, setSort] = useState('relevant');

  var fetchReviews = () => {
    axios.get('/reviews', { params: { page: page, sort: sort, product_id: props.product_id } })
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

  // Once sort option changes, retrieve the data from API
  useEffect(()=> {
    axios.get('/reviews', { params: { page: page, sort: sort, product_id: props.product_id } })
    .then((data) => {
      setReviewsList(data.data.results);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [sort]);

  if (reviewsList) {
    // Return a list of reviews for a particular product
    return (
      <div id='reviewList'>
        <div style={{ display: 'flex' }}>
          <div className='sort-options'>Sort on: </div>
          <div>
            <select onChange={(e) => setSort(e.target.value)}>
              <option value='relevant'>Relevant</option>
              <option value='helpful'>Helpful</option>
              <option value='newest'>Newest</option>
            </select>
          </div>
        </div>
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
        {modal && <Modal setModal={setModal} modal={modal} product_id={props.product_id} productChars={props.productChars} />}
      </div >
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default ReviewList;
