import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';

var postAnswer = (id, answer, nickname, userEmail) => {
  axios({
    method: 'post',
    url: '/answers',
    data: {
      //TODO: update for answer
      question_id: id,
      body: {
        body: answer,
        name: nickname,
        email: userEmail
      }
  }})
}

var AnswerModal = (props) => {

const [aResponse, setAResponse] = useState({
  "answer": '',
  "nickname": '',
  "email": ''
});

var handleSubmit = (event) => {
  event.preventDefault();
  //validate the form data
  if (aResponse.answer.length < 2) {
    alert('Please enter your answer');
  } else if (aResponse.nickname.length === 0) {
    alert('Please enter your nickname');
  } else if (aResponse.email.length === 0) {
    alert('Please enter your email')
  } else {
    //make post request
    postAnswer(props.id, aResponse.answer, aResponse.nickname, aResponse.email);
    //toggle modal to false
    props.setAnswerModal(false);
  }
}

var handleChange = (event) => {
  console.log(aResponse);
  event.preventDefault();
  setAResponse({...aResponse, [event.target.name]: event.target.value});
}

return (
  <div id="answerModal">
    <div className="modal-container">
      <form>
        <h3>Submit your Answer</h3>
        <h4>About the product</h4>

        <label>
          <b>Your Answer *</b>
          <br></br>
          <input
          onChange={handleChange}
          type="text"
          name="answer"
          value={aResponse.answer}
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
          placeholder="Example: jack543!"
          value={aResponse.nickname}
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
          placeholder="Example: jack@email.com"
          value={aResponse.email}
          maxLength="60"
        />
        <br></br>
        For authentication reasons. You will not be emailed.
        <br></br>
        </label>
        <br></br>
        <button onClick={handleSubmit}> Submit Answer </button>
      </form>
    </div>
  </div>
)
}

export default AnswerModal;

/*/
The modal should be titled “Submit your Answer”.  The modal should be subtitled:   “[Product Name]: [Question Body]” .  The appropriate product name and question body should be inserted into the subtitle.
The following inputs should appear on the question form.  Each should be labeled as titled below.  Those indicated as mandatory should have an asterisk next to the title.
1.3.6.1.    Your Answer (mandatory)
This text input should be a large text window allowing up to 1000 characters.
1.3.6.2.    What is your nickname (mandatory)
A text input allowing up to 60 characters for the user’s display name.
Placeholder text should read: “Example: jack543!”.
Below this field, the text “For privacy reasons, do not use your full name or email address” will appear.
1.3.6.3.     Your email (mandatory)
A text input allowing up to 60 characters.
Placeholder text should read: “Example: jack@email.com”.
Below this field, the text “For authentication reasons, you will not be emailed” will appear.
1.3.6.4.   Upload your photos
A button will appear allowing users to upload their photos to the form.  Up to five photos should be allowed for each answer.
Clicking the button should open a separate window where the photo to be can be selected.
After the first image is uploaded, a thumbnail showing the image should appear.  A user should be able to add up to five images before the button to add disappears, preventing further additions.
1.3.6.5.     Submit answer (button)
A button by which the answer can be submitted.
Upon selecting this button the form’s inputs should be validated.   If there are any invalid entries, the submission should be prevented, and a warning message will appear.   This message should be titled “You must enter the following:”
This error will occur if:
Any mandatory fields are blank
The email address provided is not in correct email format
The images selected are invalid or unable to be uploaded.

/*/