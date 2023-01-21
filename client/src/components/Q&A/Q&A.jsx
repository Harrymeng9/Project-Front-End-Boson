import React from 'react';
import QuestionList from './qaComponents/QuestionList.jsx';
import AnswerList from './qaComponents/AnswerList.jsx';
import SearchQuestions from './qaComponents/SearchQuestions.jsx';
import { useState, useEffect } from "react";

function QuestionAndAnswer (props) {

  const [questions, setQuestions] = useState([]);

return (
  <div>
    <h4>QUESTIONS AND ANSWERS</h4>
    <SearchQuestions />
    <QuestionList />
    <AnswerList />
  </div>

)
}

export default QuestionAndAnswer;