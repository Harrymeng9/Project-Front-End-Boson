import React from 'react';
import { QuestionList } from './qaComponents/QuestionList.jsx';
import AnswerList from './qaComponents/AnswerList.jsx';
import { SearchQuestions } from './qaComponents/SearchQuestions.jsx';
import { useState, useEffect } from "react";
import axios from "axios";

function QuestionAndAnswer (props) {

  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFiltered] = useState([]);
  const [term, setTerm] = useState('');
  const [questionModal, setQuestionModal] = useState(false);

  useEffect(() => {
    //on component render
    //make axios req to server endpoint
    axios.get('/questions', { params : {product_id: 71705}})
      .then((results) => {
        //results returned here is the RESPONSE object from the server
        console.log(results.data);
        var productQuestions = results.data;
         //set questions state equal to the results of this call
         setQuestions(productQuestions);
      })
      .catch((err) => {
        console.log('error in axios get req in QA use effect:', err);
      });
  }, []);

return (
  <div>
      <div className="qa-parent">
      <h4>QUESTIONS AND ANSWERS</h4>
      <SearchQuestions term={term} setTerm={setTerm} questions={questions} filteredQuestions={filteredQuestions} setFiltered={setFiltered} />
      <QuestionList term={term} questions={questions} filteredQuestions={filteredQuestions} questionModal={questionModal} setQuestionModal={setQuestionModal}/>
    </div>
  </div>
)
}

export default QuestionAndAnswer;