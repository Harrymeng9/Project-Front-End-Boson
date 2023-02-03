  import React from "react";
  import { useState, useEffect } from "react";
  import Overview from "./Overview/Overview.jsx";
  import QuestionAndAnswer from "./Q&A/Q&A.jsx";
  import Ratings from "./Ratings/Ratings.jsx";
  import { Related } from "./Related/Related.jsx";
  import axios from 'axios';
  import ErrorBoundary from '../Utils/ErrorBoundary.jsx';

  const withConditionalFeedback = (Component) => (props) => {
    console.log('withcomp', Component)
    console.log('withprops', props)
    if (!props) {return <div>Data is empty.</div>;}
    else {return <Component {...props} />;}
  };

  const baseOverview = ({data}) => {
    console.log(arguments)
    console.log('wearehere', {data});
    return (
      <div className="overviewMain"><Overview initial={data}/></div>
    );
  };

  const OverviewRender = withConditionalFeedback(baseOverview);

  var App = () => {
    //add state data as needed here
    const [productId, setProductId] = useState(71701)

    return (
      <div>
        <OverviewRender data={productId}/>
        <div><Related productId={productId} setProductId={setProductId} /></div>
        <div><QuestionAndAnswer productId={productId} /></div>
        <div><Ratings productId={productId} /></div>
      </div>
    )
  }

  export default App;