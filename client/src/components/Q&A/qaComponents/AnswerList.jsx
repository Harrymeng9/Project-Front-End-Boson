import React from 'react';
import Answer from './Answer.jsx';

var AnswerList = (props) => {

//render an answer component for each answer object
//pass the necessary properties as props

//create keys array out of object that holds list of answers
var keys = Object.keys(props.answers);
//iterate over the keys array
//at each key, render an answer, passing the answer object as a prop

  return (
    <div>
      {keys.map((answerId) => {
        var item = props.answers[answerId];
       return <Answer key={answerId} answerBody={item.body} author={item.answerer_name} date={item.date}/>
      })}
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
