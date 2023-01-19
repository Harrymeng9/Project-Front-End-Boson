import React from 'react';

var Answer = (props) => {

  return (
    <div>
      Individual Answer Here
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