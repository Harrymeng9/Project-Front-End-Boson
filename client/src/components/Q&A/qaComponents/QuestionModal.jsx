import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';

var QuestionModal = (props) => {

var handleSubmit = (event) => {
  event.preventDefault();
  //validate the form data
  if (props.qResponse.question.length < 2) {
    alert('Please enter a question');
  } else if (props.qResponse.nickname.length === 0) {
    alert('Please enter your nickname');
  } else if (props.qResponse.email.length === 0) {
    alert('Please enter your email')
  } else {
    //make post request
    //toggle modal to false
  }
}

var handleChange = (event) => {
  event.preventDefault();
  props.setQResponse({...props.qResponse, [event.target.name]: event.target.value});
}

return (
  <div id="questionModal">
    <div className="modal-container">
      <form>
        <h3>Ask Your Question</h3>
        <h4>About the product</h4>

        <label>
          <b>Your Question *</b>
          <br></br>
          <input
          onChange={handleChange}
          type="text"
          name="question"
          value={props.qResponse.question}
          maxLength="1000"
        />
        <br></br>
        </label>
        <br></br>

        <label>
          <b>What is your nickname *</b>
          <br></br>
          <input
          onChange={handleChange}
          type="text"
          name="nickname"
          placeholder="Example: jackson11!"
          value={props.qResponse.nickname}
          maxLength="60"
        />
        <br></br>
        For privacy reasons, do not use your full name or email address.
        <br></br>
        </label>
        <br></br>

        <label>
          <b>Your email *</b>
          <br></br>
          <input
          onChange={handleChange}
          type="text"
          name="email"
          placeholder="Example: jackson11@email.com"
          value={props.qResponse.email}
          maxLength="60"
        />
        <br></br>
        For authentication reasons. You will not be emailed.
        <br></br>
        </label>
        <br></br>
        <button onClick={handleSubmit}> Submit Question</button>
      </form>
    </div>
  </div>
)
}

export default QuestionModal;

//    title: "Ask Your Question"
//    subtitle: "About the [Product Name Here]"
//    Form Fields:
//    Your Question* (mandatory) - up to 1000 chars text input
//    What is your nickname* (mandatory) - up to 60 chars - placeholder: "Example: jackson11!"
//      below nickname field: “For privacy reasons, do not use your full name or email address”
//    Your email* (mandatory) - up to 60 chars
//  ?? placeholder: “Why did you like the product or not?”.
//      below email field" “For authentication reasons, you will not be emailed”
//    Submit question (button)
//      on click the form’s inputs should be validated.
//      If there are any invalid entries, the submission should be prevented,
//      and a warning message will appear. This message should be titled “You must enter the following:”
//        This error will occur if : Any mandatory fields are blank
//        The email address provided is not in correct email format