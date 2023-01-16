/*
Future enhancement:

1.3.6.4.   Upload your photos
A button will appear allowing users to upload their photos to the form.  Up to five photos should be allowed for each answer.
Clicking the button should open a separate window where the photo to be can be selected.
After the first image is uploaded, a thumbnail showing the image should appear.
A user should be able to add up to five images before the button to add disappears, preventing further additions.

/*/

//render "Q:" concatenated with the actual question string
//    in line with question a link with the text 'Add Answer'
//    clicking link opens up a modal window containing a form to submit answers
//      Modal Title: “Submit your Answer”
//      Modal Subtitle: “[Product Name]: [Question Body]”
//      Modal inputs, required marked with asterisk
//          Your Answer (up to 1000 chars) - mandatory
//          What is Your Nickname? (up to 60 chars) - mandatory - placeholder: “Example: jack543!”
//            below nickname field should have text: “For privacy reasons, do not use your full name or email address”
//          Your Email (up to 60 chars) - mandatory - placeholder: “Example: jack@email.com”
//            below email field should have text: “For authentication reasons, you will not be emailed”
//      Modal submit button: "Submit Answer"
//          Upon selecting this button the form’s inputs should be validated.
//          If there are any invalid entries, the submission should be prevented, and a warning message will appear
//          This message should be titled “You must enter the following:”
//          This error will occur if:
//            Any mandatory fields are blank
//            The email address provided is not in correct email format
//            The images selected are invalid or unable to be uploaded.

//render "A:" followed by list of answers.
//    answers should be rendered in order of helpfulness (how many have selected the answer as helpful)
//    initially two answers should be rendered
//    if there are more than two questions
//    "see more answers" should be clickable below the two answers
//    clicking "see more answers" should show the rest of the questions
//        the view of the rest of the questions should be confined to half of the screen
//        list should be scrollable
//        when loaded, "see more answers" should change to "collapse answers"
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
