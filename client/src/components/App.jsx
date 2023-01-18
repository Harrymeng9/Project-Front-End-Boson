import React from "react";
import Overview from "./Overview/Overview.jsx";
import QuestionAndAnswer from "./Q&A/Q&A.jsx";
import Ratings from "./Ratings/Ratings.jsx";
import Related from "./Related/Related.jsx";

var App = () => {
  //add state data as needed here

  //add other functions as needed here

  return (
    <div>
      <div><Overview/></div>
      <div>Related</div>
      <div><QuestionAndAnswer /></div>
      <div>Ratings</div>
    </div>
  )
}

export default App;