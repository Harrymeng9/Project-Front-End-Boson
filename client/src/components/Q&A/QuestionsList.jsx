/*

"The questions and their corresponding answers within this list will be displayed in an expanding and collapsing accordion.
By default, on page load up to two questions should be displayed. Up to two answers should display for each question.
The remaining questions or answers should be hidden until the user loads them using the “More Answered Questions” button (section 1.3.4).
Questions should appear in order of ‘helpfulness’, corresponding to how many users have indicated that the question was helpful.
The list will contain all questions by default, but will have the potential to be filtered to a subset based on user searches (section 1.3.3).
If no questions have been submitted for this product, then the list will collapse,
and the button to submit a new question (section 1.3.5) will appear near the top of the module."

/*/

//search component is rendered first
//on page load render Question component for two questions, these should be the two
  //with the most number of users who have indicated the question was helpful
//clicking the "More Answered Questions" button renders a Question component for ALL questions
//if no questions have been asked, button to submit new question appears near top of module
//questions appear in descending order of how many users indicated question was helpful