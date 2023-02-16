import React from 'react';



var Answer = (props) => {

  var time = new Date(props.date);
  var month = new Intl.DateTimeFormat("en-US", { month: 'long' }).format(time);
  var year = time.getFullYear();
  var date = time.getUTCDate(); //
  var adjDate = month + ' ' + date + ', ' + year;
  var usernameAndDate = props.author + ', ' + adjDate;

  return (
    <div>

      <div className="answer-header">
        <div className="A">A:</div>
        <div className="answer-body">"{props.answerBody}"</div>
      </div>

        <div className="answer-name-date">{usernameAndDate}</div>

        <div className="helpful-yes-report-answer">
          <div className="helpful-yes-report-answer">Helpful?</div>
          <div className="helpful-yes-report-answer">Yes (#)</div>
          <div className="helpful-yes-report-answer">Report</div>
        </div>

      <br></br>
    </div>
  )
}

export default Answer;

//Each answer is rendered in the format...
//    body text of the answer
//    (new line) name of answerer and date answered - “[username], Month DD, YYYY”
//        username is bolded and reads "Seller" if the answer was written by seller
//    on same line as above:
//    "Helpful? Yes (#)" where # is how many users have clicked yes
//    "Yes" is clickable, and when clicked the # increases by 1
//    one user should not be able to click more than once
//      same line as above:
//    "Report" is clickable and marks the question for internal review
//      when clicked, "Report" should change to "Reported" and user should not be able to click "report" twice