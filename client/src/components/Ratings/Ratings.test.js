/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, waitFor, getByText, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import Ratings from './Ratings.jsx';
import RatingBreakdown from './ratingComponents/RatingBreakdown.jsx';
import ProductBreakdown from './ratingComponents/ProductBreakdown.jsx';
import ReviewList from './ratingComponents/ReviewList.jsx';
import ReviewTile from './ratingComponents/ReviewTile.jsx';
import Bar from './ratingComponents/Bar.jsx';
import Modal from './ratingComponents/Modal.jsx';
import Stars from './ratingComponents/Stars.jsx';

// import { rest } from 'msw';
// import { setupServer } from 'msw/node';


// describe("Example tests", function () {
//   var stack = [];
//   test("Should rework", () => {
//     stack.push(1);
//     expect(stack.pop()).toEqual(1);
//   });
// });


/*
-----------Ratings.jsx-----------
*/

describe("Ratings.jsx", function () {
  // Unit Test
  // test("Should work", () => {
  //   expect(typeof Modal).toBe('function');
  // });

  test("Renders Ratings component header", () => {
    render(<Ratings />);
    expect(screen.getByRole('heading', { name: /ratings & reviews/i })).toBeInTheDocument();
  });

  // test("Renders Ratings component header", () => {
  //   render(<Ratings />);
  //   expect(Ratings.setProductChar).toBeCalledTimes(1);
  // });


  /*
  -----------RatingBreakdown.jsx-----------
  */

  test("Renders Rating Breakdown Component", () => {
    var productChars = {
      product_id: '71701',
      ratings: { '1': '13', '2': '19', '3': '27', '4': '23', '5': '38' },
      recommended: { false: '47', true: '73' },
      characteristics: {
        'Size': { 'id': 240595, 'value': '2.8555555555555556' },
        'Width': { 'id': 240596, 'value': '2.7411764705882353' },
        'Comfort': { 'id': 240597, 'value': '3.2325581395348837' },
        'Quality': { 'id': 240598, 'value': '3.3888888888888889' }
      }
    };

    var totalReviews = 120;
    var averageRating = 3.5;
    var adjustAverageRating = 3.5;
    var recommendRate = 61;
    var filterStars = { 1: false, 2: false, 3: false, 4: false, 5: false };

    render(<RatingBreakdown productChars={productChars} totalReviews={totalReviews}
      averageRating={averageRating} adjustAverageRating={adjustAverageRating}
      recommendRate={recommendRate} filterStars={filterStars} />)
    expect(screen.getByText(/3.5/)).toBeInTheDocument();
    expect(screen.getByText(/1 Stars/)).toBeInTheDocument();
    expect(screen.getByText(/Rating Breakdown/)).toBeInTheDocument();
    expect(screen.getByText(/120 total reviews/)).toBeInTheDocument();

  });
});


/*
-----------ProductBreakdown.jsx-----------
*/

/*
-----------ReviewList.jsx-----------
*/

/*
-----------ReviewTile.jsx-----------
*/

/*
-----------Stars.jsx-----------
*/

/*
-----------Bar.jsx-----------
*/

/*
-----------Modal.jsx-----------
*/

