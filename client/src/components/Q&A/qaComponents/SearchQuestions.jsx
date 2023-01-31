import React from 'react';

var SearchQuestions = (props) => {

  return (
    <div>
      Search Questions Component
    </div>
  )
}

export default SearchQuestions;


//A search bar will appear above the questions list.
//Search terms entered in this text input will filter the list for matching results.

//After the user types 3 or more characters into the search bar the results will
//begin to filter to only those containing matching text.
//The filter should continue to update as the user adds or removes characters.
//The bar should display placeholder text reading “Have a question? Search for answers…”
//If the user clears the search term, or removes characters so that less than 3 remain,
//the list should return to the state where it is not filtered to matching text.
//The search filter should work with any other filters or sorts that have been applied,
//and narrow the results further.   Changes to the sort and rating
//filters should not remove the search term filter.
