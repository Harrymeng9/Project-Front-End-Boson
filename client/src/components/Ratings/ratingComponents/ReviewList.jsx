import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx';
import Modal from './Modal.jsx';

var ReviewList = (props) => {

  const [reviewsList, setReviewsList] = useState([]);
  const [modal, setModal] = useState(false);
  const [sort, setSort] = useState('relevant');
  const [commentedReviews, setCommentedReviews] = useState({});
  const [renderCount, setRenderCount] = useState(2);
  const [filteredReviewListToRender, setFilteredReviewListToRender] = useState([]);

  useEffect(() => {
    if (props.totalReviews > 0) {
      axios.get('/reviews', { params: { count: props.totalReviews, sort: sort, product_id: props.product_id } })
        .then((data) => {
          // console.log('data', data.data.results);
          setReviewsList(data.data.results);
          setFilteredReviewListToRender(data.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }, [props.product_id]);

  useEffect(() => {
    var copyReviewList = reviewsList.slice();
    var filteredReviewList = [];

    if (!props.filterStars[1] && !props.filterStars[2] && !props.filterStars[3] && !props.filterStars[4] && !props.filterStars[5]) {
      filteredReviewList = copyReviewList.slice();
    } else {
      for (var i = 0; i < copyReviewList.length; i++) {
        if (props.filterStars[copyReviewList[i].rating]) {
          filteredReviewList.push(copyReviewList[i]);
        }
      }
    }
    setFilteredReviewListToRender(filteredReviewList);
  }, [props.filterStars]);

  // Once sort option changes, retrieve the data from API
  useEffect(() => {
    axios.get('/reviews', { params: { count: props.totalReviews, sort: sort, product_id: props.product_id } })
      .then((data) => {
        setReviewsList(data.data.results);
        setFilteredReviewListToRender(data.data.results);
        // Reset the renderCount state to show 2 items only
        setRenderCount(2);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sort]);

  if (reviewsList) {
    // Return a list of reviews for a particular product
    return (
      <div id='reviewList'>
        {/* Sorting */}
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
        {/* Each Review Tile */}
        <div style={{ maxHeight: '800px', overflow: 'auto' }}>
          {
            filteredReviewListToRender.slice(0, renderCount).map((result, i) => {
              return (
                <div key={i}>
                  <ReviewTile review={result} photos={result.photos} review_id={result.review_id} commentedReviews={commentedReviews} setCommentedReviews={setCommentedReviews} />
                </div>
              )
            }
              // }
            )
          }
        </div>
        {/* More Review Button */}
        {renderCount <= filteredReviewListToRender.length && <button onClick={(e) => setRenderCount(renderCount + 2)}>MORE REVIEWS</button>}
        {/* Add a Review Button */}
        <button onClick={(e) => setModal(!modal)}>ADD A REVIEW + </button>
        {modal && <Modal setModal={setModal} modal={modal} product_id={props.product_id} productChars={props.productChars} />}
      </div >
    )
  } else {
    return (
      <div>
        <button onClick={(e) => setModal(!modal)}>ADD A REVIEW + </button>
      </div>
    )
  }
}

export default ReviewList;
