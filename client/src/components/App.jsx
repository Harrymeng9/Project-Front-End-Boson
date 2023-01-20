import React from "react";
import { useState, useEffect } from "react";
import Overview from "./Overview/Overview.jsx";
import QuestionAndAnswer from "./Q&A/Q&A.jsx";
import Ratings from "./Ratings/Ratings.jsx";
import Related from "./Related/Related.jsx";
import fetchQuestions from "../../../server/helpers/questionAnswerAPI.js"

var App = () => {
  //add state data as needed here

  //state to manage the list of questions being rendered in Q&A section
  const [questions, setQuestions] = useState([]);
  //add other functions as needed here

  //utilize useEffect to trigger desired actions on page load
  useEffect(() => {
    //make a call to the question fetcher function and update state of questions list
    fetchQuestions(product_id, 2)
      .then((results) => {
        setQuestions(results)
      })
      .catch((err) => {
        console.log('error in useEffect from fetchQuestions function:', err)
      })
  })

  return (
    <div>
      <div><Overview /></div>
      <div><Related /></div>
      <div><QuestionAndAnswer questions={questions} setQuestions={setQuestions} /></div>
      <div><Ratings /></div>
    </div>
  )
}

export default App;