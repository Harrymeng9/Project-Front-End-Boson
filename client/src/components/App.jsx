import React from "react";
import { useState, useEffect } from "react";
import Overview from "./Overview/Overview.jsx";
import QuestionAndAnswer from "./Q&A/Q&A.jsx";
import Ratings from "./Ratings/Ratings.jsx";
import { Related } from "./Related/Related.jsx";
import axios from 'axios';
import ErrorBoundary from '../Utils/ErrorBoundary.jsx';

var App = () => {
  //add state data as needed here
  const [productId, setProductId] = useState(71698)

  return (
    <div>
      <div className="overviewMain"><Overview initial={productId} /></div>
      <div><Related productId={productId} /></div>
      <div><QuestionAndAnswer productId={productId} /></div>
      <div><Ratings productId={productId} /></div>
    </div>
  )
}

export default App;