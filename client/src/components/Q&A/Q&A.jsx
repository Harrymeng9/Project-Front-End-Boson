import React from 'react';
import QuestionList from './qaComponents/QuestionList.jsx';
import AnswerList from './qaComponents/AnswerList.jsx';
import SearchQuestions from './qaComponents/SearchQuestions.jsx';

function QuestionAndAnswer (props) {

  const [questions, setQuestions] = useState([]);

return (
  <div>
    Questions and Answers
    <SearchQuestions />
    <QuestionList />
    <AnswerList />
  </div>

)
}

export default QuestionAndAnswer;