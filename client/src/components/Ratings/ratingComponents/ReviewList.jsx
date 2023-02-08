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
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    if (props.totalReviews > 0) {
      axios.get('/reviews', { params: { count: props.totalReviews, sort: sort, product_id: props.product_id } })
        .then((data) => {
          setReviewsList(data.data.results);
          setFilteredReviewListToRender(data.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }, [props.product_id]);


  // Once sort option changes, retrieve the data from API
  useEffect(() => {
    axios.get('/reviews', { params: { count: props.totalReviews, sort: sort, product_id: props.product_id } })
      .then((data) => {
        setReviewsList(data.data.results);
        // Get latest data base on sort option -> apply for all fitlers (stars and search) -> setState to filteredReviewListToRender
        setFilteredReviewListToRender(applyAllFilters(data.data.results));
        // Reset the renderCount state to show 2 items only
        setRenderCount(2);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sort]);

  // Re-render the page once filterStars and searchInput state are changed
  useEffect(() => {
    // applyAllFilters(reviewsList) will return the filtered data that want to render finally
    // setState to change filteredReviewListToRender (Which will be rendered next)
    setFilteredReviewListToRender(applyAllFilters(reviewsList));
  }, [props.filterStars, searchInput]);

  // Apply the stars filter and search filter, return the filtered data that want to render finally
  var applyAllFilters = (originalList) => {
    var filteredByStarsList = [];

    if (!props.filterStars[1] && !props.filterStars[2] && !props.filterStars[3] && !props.filterStars[4] && !props.filterStars[5]) {
      filteredByStarsList = originalList.slice();
    } else {
      for (var i = 0; i < originalList.length; i++) {
        if (props.filterStars[originalList[i].rating]) {
          filteredByStarsList.push(originalList[i]);
        }
      }
    }

    var filteredReviewList = [];
    if (searchInput.length < 3) {
      filteredReviewList = filteredByStarsList.slice();
    } else {
      for (var i = 0; i < filteredByStarsList.length; i++) {
        if ((filteredByStarsList[i].body.toUpperCase().includes(searchInput.toUpperCase())) || filteredByStarsList[i].summary.toUpperCase().includes(searchInput.toUpperCase())) {
          filteredReviewList.push(filteredByStarsList[i]);
        }
      }
    }
    // return filtered data
    return filteredReviewList;
  };

  if (filteredReviewListToRender) {
    // Return a list of reviews for a particular product
    return (
      <div id='reviewList'>
        {/* Sorting */}
        <div style={{ display: 'flex' }}>
          <div className='reviewList-sort-options'>Sort on: </div>
          <div>
            <select onChange={(e) => setSort(e.target.value)}>
              <option value='relevant'>Relevant</option>
              <option value='helpful'>Helpful</option>
              <option value='newest'>Newest</option>
            </select>
          </div>
        </div>
        <div><input className='reviewList-margin-bottom' type='text' placeholder='Enter your keyword' onChange={(e) => { setSearchInput(e.target.value) }} /></div>
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
