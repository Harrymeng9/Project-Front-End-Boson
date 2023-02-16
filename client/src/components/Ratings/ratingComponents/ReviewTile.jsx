import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Stars from './Stars.jsx';
import { ImCheckmark } from 'react-icons/im';

var ReviewTile = (props) => {

  var review = props.review; // review = {rating: , date: , ...}
  // Return each review for a particular product
  var time = new Date(review.date);
  var month = new Intl.DateTimeFormat("en-US", { month: 'long' }).format(time);
  var year = time.getFullYear();
  var date = time.getUTCDate();
  var adjDate = month + ' ' + date + ', ' + year;
  var usernameAndAdjDate = review.reviewer_name + ', ' + adjDate;

  const [isMoreToShow, setIsMoreToShow] = useState(true);
  const [isYesClicked, setIsYesClicked] = useState(false);
  const [frontEndYesCount, setFrontEndYesCount] = useState(review.helpfulness);
  var commentedReviewsList = {};

  useEffect(() => {
    setFrontEndYesCount(props.review.helpfulness);
  }, [props.review]);

  var clickYesButton = () => {
    // If user has not clicked on "YES" yet (even change the sorting option or not), then will run below
    if (!isYesClicked && props.commentedReviews[props.review_id] !== true) {
      setIsYesClicked(!isYesClicked);
      commentedReviewsList[props.review_id] = true;
      // {'1254284':true, '1278546': true}
      props.setCommentedReviews(commentedReviewsList);
      // Front end shows the yes count + 1 directly
      setFrontEndYesCount(frontEndYesCount + 1);
      // Send PUT request to update API
      axios.put(`/reviews/:id/helpful`, { review_id: props.review_id })
        .then((data) => {
          console.log('Successully update the API');
        })
        .catch((err) => {
          console.log(err);
        })
    }
  };

  return (
    <div className='reviewTile'>
      {/* Star rating/Username/Date */}
      <div className='star-user-date'>
        <Stars singleRating={review.rating} />
        <div className='date'>{usernameAndAdjDate}</div>
      </div>
      {/* Summary Title */}
      <div className='reviewtile-summary'>{review.summary}</div>
      {/* Body */}
      {/* <div className='reviewtile-margin-bottom'>{partialBody}</div> */}
      {review.body.length <= 250 && <div className='reviewtile-margin-bottom'>{review.body}</div>}
      {review.body.length > 250 && isMoreToShow &&
        <div>
          <div className='reviewtile-margin-bottom'>{review.body.substring(0, 251)}</div>
          <div className='reviewtile-readmore' onClick={(e) => { setIsMoreToShow(!isMoreToShow) }}>Show More</div>
        </div>}
      {review.body.length > 250 && !isMoreToShow && <div className='reviewtile-margin-bottom'>{review.body}</div>}
      {/* Photos */}
      <div style={{ display: 'flex' }}>
        {props.photos.map((photo, key) => {
          return (
            <div key={key}>
              <a href={props.photos[key].url} target="_blank">
                <img className='writeReview-photos' src={props.photos[key].url} />
              </a>
            </div>
          )
        })}
      </div>
      {/* Recommend */}
      {review.recommend && <div className='reviewtile-margin-bottom'><ImCheckmark color='green' /> I recommend this product</div>}
      {/* Response */}
      {review.response &&
        <div className='reviewtile-response'>
          <div className='reviewtile-response'><strong>Response from seller</strong></div>
          <div>{review.response}</div>
        </div>}
      {/* Helpful */}
      <div className='helpful-yes-report'>
        <div className='reviewtile-margin-right '>Helpful?</div>
        <div className='reviewtile-yes' onClick={clickYesButton}>Yes</div>
        <div className='reviewtile-margin-right '>{frontEndYesCount} |</div>
        <div className='reviewtile-report'>Report</div>
      </div>
      <hr style={{ color: 'black' }} />
    </div>
  )
}

export default ReviewTile;
