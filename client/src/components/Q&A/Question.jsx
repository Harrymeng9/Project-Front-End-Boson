/*



/*/


//render "Q:" concatenated with the actual question string
//render "A:" followed by list of answers.
  //initially two answers should be rendered
  //if there are more than two questions
  //"see more answers" should be clickable below the two answers
  //clicking "see more answers" should show the rest of the questions
//Each answer is rendered in the format...
    //body text of the answer
    //(new line) name of answerer and date answered - “[username], Month DD, YYYY”
      //username is bolded and reads "Seller" if the answer was written by seller
    //same line as above:
    //"Helpful? Yes (#)" where # is how many users have clicked yes
    //"Yes" is clickable, and when clicked the # increases by 1
    //one user should not be able to click more than once
    //same line as above:
    //"Report" is clickable and marks the question for internal review
      //when clicked, "Report" should change to "Reported" and user should not be able to click "report" twice
