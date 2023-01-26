import { renderQuestions } from "./qaComponents/QuestionList.jsx"

describe("Integration Tests", function () {
  var testArray = [{question_id: 1, question_body: 'hello', answers: {}}, {question_id: 2, question_body: 'goodbye', answers: {}}];
  test("Should produce an array equal in length to the input array", () => {
    var resultArr = renderQuestions(testArray);
    expect(resultArr.length).toEqual(testArray.length);
  });
});
