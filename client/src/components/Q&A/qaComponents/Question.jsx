import React from 'react';
import AnswerList from './AnswerList.jsx';
import AnswerModal from './AnswerModal.jsx';
import { useState, useEffect } from "react";

var Question = (props) => {

  const [answerModal, setAnswerModal] = useState(false);

  var handleClick = () => {
    //open modal
    setAnswerModal(true);
  }

  console.log(props.id);

  return (
    <div>
      <div className="question">
        <div className="question-header">
          <div className="Q">Q:</div>
          <div className="question-body"> {props.questionBody}</div>
          <div className="helpful-yes-answer">
          <div className="helpful-yes-answer"> Helpful?</div>
          <div className="helpful-yes-answer"> Yes</div>
          <div onClick={handleClick} className="helpful-yes-answer"> Add Answer</div>
        </div>
      </div>


      {answerModal &&  <AnswerModal id={props.id} setAnswerModal={setAnswerModal}/>}
        <div className="answerList">
        < AnswerList answers={props.answers}/>
        </div>
      </div>
    </div>
  )
}

export default Question;

/*
Future enhancement:

1.3.6.4.   Upload your photos
A button will appear allowing users to upload their photos to the form.  Up to five photos should be allowed for each answer.
Clicking the button should open a separate window where the photo to be can be selected.
After the first image is uploaded, a thumbnail showing the image should appear.
A user should be able to add up to five images before the button to add disappears, preventing further additions.

/*/

//render "Q:" concatenated with the actual question string
// in line with question a link with the text 'Add Answer'
//    clicking link opens up a modal window containing a form to submit answers
//      Modal Title: “Submit your Answer”
//      Modal Subtitle: “[Product Name]: [Question Body]”
//      Modal inputs, required marked with asterisk
//          Your Answer (up to 1000 chars) - mandatory
//          What is Your Nickname? (up to 60 chars) - mandatory - placeholder: “Example: jack543!”
//            below nickname field should have text: “For privacy reasons, do not use your full name or email address”
//          Your Email (up to 60 chars) - mandatory - placeholder: “Example: jack@email.com”
//            below email field should have text: “For authentication reasons, you will not be emailed”
//      Modal submit button: "Submit Answer"
//          Upon selecting this button the form’s inputs should be validated.
//          If there are any invalid entries, the submission should be prevented, and a warning message will appear
//          This message should be titled “You must enter the following:”
//          This error will occur if:
//            Any mandatory fields are blank
//            The email address provided is not in correct email format
//            The images selected are invalid or unable to be uploaded.

