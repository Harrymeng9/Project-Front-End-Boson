import React from 'react';
import Answer from './Answer.jsx';

var AnswerList = (props) => {

  return (
    <div>
      Answer List Here
      <Answer />
      <Answer />
      <Answer />
    </div>
  )
}

export default AnswerList;

//render "A:" followed by list of answers.
//    answers should be rendered in order of helpfulness (how many have selected the answer as helpful)
//    initially two answers should be rendered
//    if there are more than two questions
//    "see more answers" should be clickable below the two answers
//    clicking "see more answers" should show the rest of the questions
//        the view of the rest of the questions should be confined to half of the screen
//        list should be scrollable
//        when loaded, "see more answers" should change to "collapse answers"
