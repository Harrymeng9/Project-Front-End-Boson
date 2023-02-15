/** @jest-environment jsdom */

import * as React from "react";
import * as ReactDOM from "react-dom";
import '@testing-library/jest-dom';
import { renderQuestions } from "./qaComponents/QuestionList.jsx";
import { render, screen, getByText } from '@testing-library/react';
import QuestionAndAnswer from "./Q&A.jsx";
import { SearchQuestions } from "./qaComponents/SearchQuestions.jsx";
import { handleChange } from "./qaComponents/SearchQuestions.jsx";


describe("Function Tests", function () {
  var testArray = [{question_id: 1, question_body: 'hello', answers: {}}, {question_id: 2, question_body: 'goodbye', answers: {}}, {question_id: 3, question_body: 'neato', answers: {}}];
  var count = 2;
  test("Should produce an array equal in length to the input array", () => {
    var resultArr = renderQuestions(count, testArray);
    expect(resultArr.length).toEqual(2);
  });
});

describe("Renders Q&A Component", function () {
  test("Renders correct title on parent Q&A component", () => {
    var title = "QUESTIONS AND ANSWERS";
    render(<QuestionAndAnswer />);
    expect(screen.getByRole("heading")).toHaveTextContent(title);
  });
});

describe("Renders Question List Component", function () {
  test("Renders correct title on parent Q&A component", () => {
    var placeholder = "Have a question? Search for answers…";
    render(<SearchQuestions />);
    expect(screen.getByRole("placeholder")).toHaveTextContent(placeholder);
  });
});
