import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';

const Modal = (props) => {

  const [ratingValue, setRatingValue] = useState(0);
  const [recommend, setRecommend] = useState(true);
  const [size, setSize] = useState(0);
  const [width, setWidth] = useState(0);
  const [comfort, setComfort] = useState(0);
  const [quality, setQuality] = useState(0);
  const [length, setLength] = useState(0);
  const [fit, setFit] = useState(0);
  const [reviewSummary, setReviewSummary] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [photos, setPhotos] = useState([]);
  const [nickname, setNickName] = useState('');
  const [email, setEmail] = useState('');

  var ratingLevel = ['', 'Poor', 'Fair', 'Average', 'Good', 'Great'];

  var charDataArray = [];
  // charsObj = { Quality: { id: 240586, value: '3.2686567164179104' }
  var charsObj = props.productChars.characteristics;
  if (charsObj['Size']) { charDataArray.push({ category: 'Size', val1: 'A size too small', val2: '1/2 a size too small', val3: 'Perfect', val4: '1/2 a size too big', val5: 'A size too wide' }); }
  if (charsObj['Width']) { charDataArray.push({ category: 'Width', val1: 'Too narrow', val2: 'Slightly narrow', val3: 'Perfect', val4: 'Slightly wide', val5: 'Too wide' }); }
  if (charsObj['Comfort']) { charDataArray.push({ category: 'Comfort', val1: 'Uncomfortable', val2: 'Slightly uncomfortable', val3: 'Ok', val4: 'Comfortable', val5: 'Perfect' }); }
  if (charsObj['Quality']) { charDataArray.push({ category: 'Quality', val1: 'Poor', val2: 'Below average', val3: 'What I expected', val4: 'Pretty great', val5: 'Perfect' }); }
  if (charsObj['Length']) { charDataArray.push({ category: 'Length', val1: 'Runs short', val2: 'Runs slightly short', val3: 'Perfect', val4: 'Runs slightly long', val5: 'Runs long' }); }
  if (charsObj['Fit']) { charDataArray.push({ category: 'Fit', val1: 'Runs tight', val2: 'Runs slightly tight', val3: 'Perfect', val4: 'Runs slightly long', val5: 'Runs long' }); }

  var charDataObj = {
    'Size': [size, setSize],
    'Width': [width, setWidth],
    'Comfort': [comfort, setComfort],
    'Quality': [quality, setQuality],
    'Length': [length, setLength],
    'Fit': [fit, setFit]
  };

  var photosChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      var img = e.target.files[0];
      var testUrl = URL.createObjectURL(img);
      setPhotos(photos.concat(testUrl));
    }
  };

  var submitReview = (e) => {

    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var handleChars = () => {
      for (var key in charsObj) {
        if (charDataObj[key][0] === 0) {
          return false;
        }
      }
      return true;
    };

    if (ratingValue === 0) {
      alert('You must enter the following: Overall rating');
    } else if (handleChars() === false) {
      alert('You must enter the following: Characteristics');
    } else if (reviewBody.length < 50) {
      alert('You must enter the following: The review body is less than 50 characters')
    } else if (nickname === '') {
      alert('You must enter the following: Nichname')
    } else if (email === '') {
      alert('You must enter the following: Email')
    } else if (!re.test(email)) {
      alert('You must enter the following: Email with correct format')
    } else {

      // {'204570': quality state, '204589': size state}
      var postCharacterData = {};
      for (var key in charsObj) {
        var id = charsObj[key].id;
        var value = charDataObj[key][0];
        postCharacterData[id] = value;
      }

      var postData = {
        product_id: props.product_id,
        rating: ratingValue,
        summary: reviewSummary,
        body: reviewBody,
        recommend: recommend,
        name: nickname,
        email: email,
        photos: photos,
        characteristics: postCharacterData
      };

      // If everything works, send POST request and close window
      axios.post('/reviews', postData)
        .then((data) => {
          props.setModal(!props.modal);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  };

  // If modal is true, then pop up the window
  if (props.modal) {
    return (
      <div id='modal'>
        <div className="modal-container" style={{ maxHeight: '800px', overflow: 'auto' }}>
          <div className='writeReview-mainTitle'>Write Your Review</div>
          <div className='writeReview-subtitle'>About the {props.currentProductInfo.data.name}</div>
          {/* Overall Rating */}
          <div className='writeReview-title'>Overall rating *</div>
          <div className='writeReview-title-box' style={{ display: 'flex' }}>
            <div className='writeReview-starimage'>
              <StarRatings
                starRatedColor='black'
                starHoverColor='black'
                changeRating={(newRating) => setRatingValue(newRating)}
                rating={ratingValue}
                starDimension='20px'
                starSpacing='3px'
              />
            </div>
            <div>{ratingLevel[ratingValue]}</div>
          </div>
          {/* Recommendation */}
          <div>
            <div className='writeReview-title'>Do you recommend this product? *</div>
            <div className='writeReview-title-box'>
              <input name='r1' type='radio' checked={recommend === true} onChange={(e) => setRecommend(true)} /> Yes
              <input name='r1' type='radio' checked={recommend === false} onChange={(e) => setRecommend(false)} /> No
            </div>
          </div>
          {/* Characteristics */}
          <div>
            <label className='writeReview-title'>Characteristics *</label>
            <div className='writeReview-title-box'>
              <table>
                {charDataArray.map((val, key) => {
                  return (
                    <tbody key={key}>
                      <tr>
                        <td>{val.category}</td>
                        <td> <input type='radio' checked={charDataObj[val.category][0] === 1} onChange={(e) => charDataObj[val.category][1](1)} />{val.val1}</td>
                        <td> <input type='radio' checked={charDataObj[val.category][0] === 2} onChange={(e) => charDataObj[val.category][1](2)} />{val.val2}</td>
                        <td> <input type='radio' checked={charDataObj[val.category][0] === 3} onChange={(e) => charDataObj[val.category][1](3)} />{val.val3}</td>
                        <td> <input type='radio' checked={charDataObj[val.category][0] === 4} onChange={(e) => charDataObj[val.category][1](4)} />{val.val4}</td>
                        <td> <input type='radio' checked={charDataObj[val.category][0] === 5} onChange={(e) => charDataObj[val.category][1](5)} />{val.val5}</td>
                      </tr>
                    </tbody>
                  )
                })}
              </table>
            </div>
          </div>
          {/* Review Summary */}
          <div className='writeReview-title-box'>
            <div className='writeReview-title'>Review summary</div>
            <textarea maxLength='60' rows={2} cols={40} placeholder='Best purchase ever!' onChange={(e) => setReviewSummary(e.target.value)} />
          </div>
          {/* Review Body */}
          <div className='writeReview-title-box'>
            <div className='writeReview-title'>Review body *</div>
            <textarea maxLength='1000' value={reviewBody} rows={4} cols={40} placeholder='Why did you like the product or not?'
              onChange={(e) => setReviewBody(e.target.value)} />
            {reviewBody.length < 50 && <div>Minimum Required Characters Left: {50 - reviewBody.length}</div>}
            {reviewBody.length >= 50 && <div>Minimum Reached</div>}
          </div>
          {/* Photos */}
          <div className='writeReview-title-box'>
            <div style={{ display: 'flex' }}>
              {photos.map((photo, key) => {
                return (
                  <div key={key}>
                    <a href={photo} target="_blank">
                      <img className='writeReview-photos' src={photo} />
                    </a>
                  </div>
                )
              })}
            </div>
            <div className='writeReview-title'>Upload your photos</div>
            <div>{photos.length < 5 && <input type='file' onChange={photosChange} />}</div>
          </div>
          {/* Nickname */}
          <div className='writeReview-title-box'>
            <div className='writeReview-title'>What is your nickname *</div>
            <textarea maxLength='60' value={nickname} rows={2} cols={40} placeholder='jackson11!'
              onChange={(e) => setNickName(e.target.value)} />
            <div>For privacy reasons, do not use your full name or email address</div>
          </div>
          {/* Email */}
          <div className='writeReview-title-box'>
            <div className='writeReview-title'>Your email *</div>
            <textarea maxLength='60' value={email} rows={2} cols={40} placeholder='jackson11@gmail.com'
              onChange={(e) => setEmail(e.target.value)} />
            <div>For authentication reasons, you will not be emailed</div>
          </div>
          {/* Submit button */}
          <button onClick={submitReview}>Submit</button>
          <button onClick={(e)=> props.setModal(!props.modal)}>Close</button>
        </div>
      </div>
    );
  } else {
    return (
      <div></div>
    )
  }
};

export default Modal;