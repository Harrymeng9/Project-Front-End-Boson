/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, waitFor, getByText,fireEvent,within } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from './ratingComponents/Modal.jsx';
import Ratings from './Ratings.jsx';
import ReviewList from './ratingComponents/ReviewList.jsx';

describe("Example tests", function () {
  var stack = [];
  test("Should rework", () => {
    stack.push(1);
    expect(stack.pop()).toEqual(1);
  });
});

describe("Example tests", function () {
  // Unit Test
  test("Should work", () => {
    expect(typeof Modal).toBe('function');
  });

  // Integration Test
  test("Renders Ratings component header", () => {
    render(<Ratings />);
    expect(screen.getByText(/RATING/)).toBeInTheDocument();
  });
  // Integration Test - div id
  // test("Renders rating component", () => {
  //   render(<Ratings />);
  //   expect(screen.queryByTestId('modal')).toBeInTheDocument();
  // });

  // Integration Test - button
  // test("Renders review component", () => {
    // render(<Ratings />);
    // render(<ReviewList />);
    // const test = within(screen.getByText('Review List').parentElement);
    // const test = screen.getByText(/Review/);
    // expect(screen.getByText(/Review/)).toBeInTheDocument();
    // const test = getByText(/Review/);
    // expect(test).toBeInTheDocument();
    // const buttonReviews = screen.getByRole('button', { name: 'ADD A REVIEW +' });
    // expect(test.getByRole("button", { name: 'MORE REVIEWS' })).toBeInTheDocument();
    // expect(buttonReviews).toHaveClass('moreReviews');
    // expect(view.getByRole('button', name: 'MORE REVIEWS'), isInTheDocument);
  // });
});