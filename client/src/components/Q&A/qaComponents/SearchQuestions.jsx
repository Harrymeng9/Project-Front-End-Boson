import React from 'react';

export var SearchQuestions = (props) => {

  var handleChange = (e) => {
    props.setTerm(e.target.value)
    var filtered = [];
    if (props.term.length >= 3) {
      //confirmed that props.questions logs expected array of questions
      for (var i = 0; i < props.questions.length; i++) {
        var question = props.questions[i];
        if (question.question_body.includes(props.term)) {
          filtered.push(question);
        }
        for (var key in question.answers) {
          if (question.answers[key].body.includes(props.term)) {
            filtered.push(question);
          }
        }
        //the log below shows me the array i am expecting in the console
        console.log('before setting state', filtered);
        props.setFiltered(filtered);
      }
      //set filtered questions state to filtered array
      props.setFiltered(filtered);
    }
  }

  return (
    <div>
      <form>
        <input onChange={handleChange}
            type="text"
            name="search"
            placeholder="Have a question? Search for answers…"
            value={props.term}
        />
      </form>
    </div>
  )
}


//# A search bar will appear above the questions list.
//Search terms entered in this text input will filter the list for matching results.

//After the user types 3 or more characters into the search bar the results will
  //begin to filter to only those containing matching text.
//The filter should continue to update as the user adds or removes characters.
//# The bar should display placeholder text reading “Have a question? Search for answers…”
//If the user clears the search term, or removes characters so that less than 3 remain,
//the list should return to the state where it is not filtered to matching text.
//The search filter should work with any other filters or sorts that have been applied,
//and narrow the results further.
//Changes to the sort and rating filters should not remove the search term filter.
