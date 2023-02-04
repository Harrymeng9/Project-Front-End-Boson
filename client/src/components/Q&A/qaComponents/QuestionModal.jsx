import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';

var QuestionModal = (props) => {

const [response, setResponse] = useState({
  "question": '',
  "nickname": '',
  "email": ''
});

var handleChange = (event) => {
  setResponse({...response, [event.target.name]: event.target.value});
}

return (
  <div id="questionModal">
    <div className="modal-container">
      <form>
        <h4>Ask Your Question</h4>
        <h5>About the product</h5>

        <label>
          Your Question *
          <br></br>
          <input
          onChange={handleChange}
          type="text"
          name="question"
          value={response.question}
        />
        </label>
        <br></br>
        <br></br>

        <label>
          What is your nickname *
          <br></br>
          <input
          onChange={handleChange}
          type="text"
          name="nickname"
          placeholder="Example: jackson11!"
          value={response.nickname}
        />
        <br></br>
        For privacy reasons, do not use your full name or email address.
        </label>
        <br></br>
        <br></br>

        <label>
          Your email *
          <br></br>
          <input
          onChange={handleChange}
          type="text"
          name="email"
          placeholder="Example: jackson11@email.com"
          value={response.email}
        />
        <br></br>
        For authentication reasons. You will not be emailed.
        </label>
        <br></br>
        <br></br>

        <input
        onSubmit={()=>{console.log(response)}}
        type="submit" />
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