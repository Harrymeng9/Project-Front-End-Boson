/** @jest-environment jsdom */

import * as React from "react";
import * as ReactDOM from "react-dom";
import '@testing-library/jest-dom';
import { renderQuestions } from "./qaComponents/QuestionList.jsx";
import { render, screen, getByText } from '@testing-library/react';
import QuestionAndAnswer from "./Q&A.jsx";


describe("Function Tests", function () {
  var testArray = [{question_id: 1, question_body: 'hello', answers: {}}, {question_id: 2, question_body: 'goodbye', answers: {}}];
  test("Should produce an array equal in length to the input array", () => {
    var resultArr = renderQuestions(testArray);
    expect(resultArr.length).toEqual(testArray.length);
  });
});

describe("Component Tests", function () {
  test("Renders correct title on Parent Q&A component", () => {
    var title = "QUESTIONS AND ANSWERS";
    render(<QuestionAndAnswer />);
    expect(screen.getByText(title)).toBe("<h4>QUESTIONS AND ANSWERS</h4>");
  });
});
