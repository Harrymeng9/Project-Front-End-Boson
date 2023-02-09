import React from 'react';
import Question from './Question.jsx';
import { useState, useEffect } from "react";
import QuestionModal from './QuestionModal.jsx';

export var renderQuestions = function (count, questionsArr) {

  var sortedQuestions = questionsArr.sort((a, b) => {
    return b.rating - a.rating;
  });

  var components = [];

  for (var i = 0; i < sortedQuestions.length; i++) {
    var question = questionsArr[i];
    if (i < count) {
      components.push(<Question key={i} id={question.question_id} questionBody={question.question_body} answers={question.answers}/>);
    } else {
      break;
    }
  }
  return components;
}

export var QuestionList = (props) => {

  const [questionsCount, setQuestionsCount] = useState(2)
  const [qResponse, setQResponse] = useState({
    "question": '',
    "nickname": '',
    "email": ''
  });

  var handleClick = () => {
    var newCount = questionsCount + 2;
    setQuestionsCount(newCount);
  }

  var handleAddQuestionClick = () => {
    //set Modal state to opposite of current state
    props.setQuestionModal(!props.questionModal);
  }

  if (props.term.length >= 3 && props.filteredQuestions) {
    var questions = renderQuestions(questionsCount, props.filteredQuestions);
    var length = props.filteredQuestions.length;
  } else {
    var questions = renderQuestions(questionsCount, props.questions);
    var length = props.questions.length;
  }

  return (
<div className="question-list">
  <div>
    {questions}
    {length > 2 && questionsCount < length && <button onClick={handleClick}>More Answered Questions</button>}
    <div>
      <button onClick={handleAddQuestionClick}>Ask a Question</button>
    </div>
    <div>
      {props.questionModal && <QuestionModal setQuestionModal={props.setQuestionModal} qResponse={qResponse} setQResponse={setQResponse}/>}
    </div>
  </div>
</div>
  )
}

/*

/*/

//TODO
//    Questions & Answers module should fit on a single screen.
//    The questions list should become scrollable.
//    The search bar and buttons should remain fixed outside of the scrollable list.
//if no questions have been asked, button to submit new question appears near top of module

//Add a Question button
//on click, modal window opens overlaying product page with question form

//?? - "The questions and their corresponding answers within this list
//will be displayed in an expanding and collapsing accordion.

//DONE
//#done - on page load render Question component for two questions, these should be the two
//  with the most number of users who have indicated the question was helpful
//  questions appear in descending order of how many users indicated question was helpful
//#done - 'More Answered Questions' button appears if there are more than 2 questions
//    on click, up to 2 more answered questions appear
//    questions should show in order below the previously loaded questions.
//    more answered questions button should disappear when all questions are displayed.
//    maximum height of the questions list should be capped such that the entire
//By default, on page load up to two questions should be displayed.
//Up to two answers should display for each question.

//The list will contain all questions by default,
//but will have the potential to be filtered to a subset based on user searches (section 1.3.3).

