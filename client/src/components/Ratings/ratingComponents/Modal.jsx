import React from "react";

const Modal = (props) => {
  var submitReview = (e) => {
    props.setModal(!props.modal);
    // send POST request to server

  }
  // If modal is true, then pop up the window
  if (props.modal) {
    return (
      <div id='modal'>
        <div className="modal-container">
          <div>Write Your Review</div>
          <div>About the Product Name here</div>
          <div>
            <label>Overrall rating * </label>
          </div>
          <br></br>
          <div>
            <label>Do you recommend this product? *</label>
            <div>
              <input type='radio' value='Yes' /> Yes
              <input type='radio' value='No' /> No
            </div>
          </div>
          <br></br>
          <div>
            <label>Characteristics *</label>
            <div>
              <label>Size</label>
              <input type='radio' value='A size too mall' />A size too small
              <input type='radio' value='1/2 a size too small' />A size too small
              <input type='radio' value='Perfect' />Perfect
              <input type='radio' value='1/2 a size too big' />1/2 a size too big
              <input type='radio' value='A size too wide' />A size too wide
            </div>
            <div>
              <label>Width</label>
              <input type='radio' value='Too narrow' />Too narrow
              <input type='radio' value='Slightly narrow' />Slightly narrow
              <input type='radio' value='Perfect' />Perfect
              <input type='radio' value='Slightly wide' />Slightly wide
              <input type='radio' value='Too wide' />Too wide
            </div>
          </div>
          <br></br>
          <div>
            <label>Review summary</label>
            <div>
              <input type='text' placeholder='Best purchase ever!' />
            </div>
          </div>
          <div>
            <label>Review body *</label>
            <div>
              <input type='text' placeholder='Why did you like the product or not?' />
            </div>
          </div>
          <div>
            <label>Upload your photos</label>
            <div><button>Upload</button></div>
          </div>
          <br></br>
          <div>
            <label>What is your nickname *</label>
            <div>
              <input type='text' placeholder='jackson11!' />
              <div>For privacy reasons, do not use your full name or email address</div>
            </div>
          </div>
          <br></br>
          <div>
            <label>Your email *</label>
            <div>
              <input type='text' placeholder='jackson11@gmail.com' />
              <div>For authentication reasons, you will not be emailed</div>
            </div>
          </div>
          <button onClick={submitReview}>Submit</button>
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