import React from "react";
import { useState, useEffect } from "react";
import Overview from "./Overview/Overview.jsx";
import QuestionAndAnswer from "./Q&A/Q&A.jsx";
import Ratings from "./Ratings/Ratings.jsx";
import { Related } from "./Related/Related.jsx";

var App = () => {
  //add state data as needed here
  const [productId, setProductId] = useState(71698)

  //utilize useEffect to trigger desired actions on page load
  useEffect(() => {
  })

  return (
    <div>
      <div><Overview /></div>
      <div><Related productId={productId} /></div>
      <div><QuestionAndAnswer productId={productId} /></div>
      <div><Ratings /></div>
    </div>
  )
}

export default App;