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

/*
-----------Ratings.jsx-----------
*/

describe("Ratings.jsx", function () {

  var productId = 71701;
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

  var currentProductInfo = {
    data: {
      id: 71701,
      campus: 'hr-rpp',
      name: 'Heir Force Ones',
      slogan: 'A sneaker dynasty',
      description: "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
      category: 'Kicks',
      default_price: '99.00',
      created_at: '2022-05-11T19:38:15.373Z',
      updated_at: '2022-05-11T19:38:15.373Z',
      features: [
        { feature: 'Sole', value: 'Rubber' },
        { feature: 'Material', value: 'FullControlSkin' },
        { feature: 'Mid-Sole', value: 'ControlSupport Arch Bridge' },
        { feature: 'Stitching', value: 'Double Stitch' }
      ]
    }
  }
  var modal = false;

  test("Renders Ratings component header", () => {
    render(<Ratings />);
    expect(screen.getByRole('heading', { name: /ratings & reviews/i })).toBeInTheDocument();
  });

  /*
  -----------RatingBreakdown.jsx-----------
  */

  test("Renders Rating Breakdown Component", () => {
    render(<RatingBreakdown productChars={productChars} totalReviews={totalReviews}
      averageRating={averageRating} adjustAverageRating={adjustAverageRating}
      recommendRate={recommendRate} filterStars={filterStars} />)
    expect(screen.getByText(/3.5/)).toBeInTheDocument();
    expect(screen.getByText(/120 total reviews/)).toBeInTheDocument();
    expect(screen.getByText(/Rating Breakdown/)).toBeInTheDocument();
    expect(screen.getByText(/1 Stars/)).toBeInTheDocument();
    expect(screen.getByText(/2 Stars/)).toBeInTheDocument();
    expect(screen.getByText(/3 Stars/)).toBeInTheDocument();
    expect(screen.getByText(/4 Stars/)).toBeInTheDocument();
    expect(screen.getByText(/5 Stars/)).toBeInTheDocument();
  });



  /*
  -----------ProductBreakdown.jsx-----------
  */

  test("Renders Product Breakdown Component", () => {
    render(<ProductBreakdown productChars={productChars} />);
    expect(screen.getByText(/Size/)).toBeInTheDocument();
    expect(screen.getByText(/Width/)).toBeInTheDocument();
    expect(screen.getByText(/Comfort/)).toBeInTheDocument();
    expect(screen.getByText(/Quality/)).toBeInTheDocument();
  });


  /*
  -----------ReviewList.jsx-----------
  */

  test("Renders Review List Component", () => {

    render(<ReviewList product_id={productId} productChars={productChars} totalReviews={totalReviews}
      filterStars={filterStars} currentProductInfo={currentProductInfo}/>);
    expect(screen.getByText(/Sort on/)).toBeInTheDocument();
    expect(screen.getByText(/Relevant/)).toBeInTheDocument();
    expect(screen.getByText(/Helpful/)).toBeInTheDocument();
    expect(screen.getByText(/Newest/)).toBeInTheDocument();
    // expect(screen.getByRole('button', { name: /MORE REVIEWS/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ADD A REVIEW +/i })).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /ADD A REVIEW +/i });
    expect(screen.queryByText(/Write Your Review/)).toBeNull();
    button.click();
    expect(screen.getByText(/Write Your Review/)).toBeInTheDocument();

  });

  // var request = require('supertest')('http://localhost:3000');

  // test("Integration Test Review List Component", function (done)  {
  //   // render(<ReviewList product_id={productId} productChars={productChars} totalReviews={totalReviews}
  //   //   filterStars={filterStars} currentProductInfo={currentProductInfo} />);

  //   // it('testing', function (done) {
  //   request.get('/reviews', { params: { count: 100, sort: 'relevant', product_id: 71701 }})
  //     // .expect(200)
  //     .expect(function (res) {
  //       expect(res.data).toBe(71701);
  //     })
  //     .end(done);
  // });


  /*
  -----------ReviewTile.jsx-----------
  */

  test("Renders Review Tile Component", () => {
    var result = {
      body: "Is the api broken?Is the api broken?Is the api broken?Is the api broken?",
      date: "2022-09-08T00:00:00.000Z",
      helpfulness: 33,
      photos: [{ id: 2456075, url: 'https://i.ibb.co/b2rF9Sm/Image-created-with-a-mobile-phone.png' }],
      rating: 3,
      recommend: false,
      response: null,
      review_id: 1276602,
      reviewer_name: "Is the api broken?",
      summary: "Is the api broken?"
    }

    render(<ReviewTile review={result} photos={result.photos} review_id={result.review_id} />);
    expect(screen.getByText(/33/)).toBeInTheDocument();
  });

  /*
  -----------Stars.jsx-----------
  */

  /*
  -----------Bar.jsx-----------
  */

  /*
  -----------Modal.jsx-----------
  */

  test("Renders Modal Component", () => {
    modal = true;
    var setModal = () => {
      modal = false;
    }

    render(<Modal modal={modal} setModal={setModal} product_id={productId}
      productChars={productChars} currentProductInfo={currentProductInfo} />)

    expect(screen.getByText(/Write Your Review/)).toBeInTheDocument();
    expect(screen.getByText(/Overall rating */)).toBeInTheDocument();
    expect(screen.getByText(/Do you recommend this product? */)).toBeInTheDocument();
    expect(screen.getByText(/Yes No/)).toBeInTheDocument();
    expect(screen.getByText(/Characteristics */)).toBeInTheDocument();
    expect(screen.getByText(/Review summary/)).toBeInTheDocument();
    expect(screen.getByText(/Review body */)).toBeInTheDocument();
    expect(screen.getByText(/Upload your photos/)).toBeInTheDocument();
    expect(screen.getByText(/What is your nickname */)).toBeInTheDocument();
    expect(screen.getByText(/For privacy reasons, do not use your full name or email address/)).toBeInTheDocument();
    expect(screen.getByText(/Your email */)).toBeInTheDocument();
    expect(screen.getByText(/For authentication reasons, you will not be emailed/)).toBeInTheDocument();

    expect(screen.getByPlaceholderText('Best purchase ever!')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Why did you like the product or not?')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('jackson11!')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('jackson11@gmail.com')).toBeInTheDocument();



    // Based on the placeholder's text, changed its value and check if the value is displayed
    expect(screen.queryByText(/NiceProduct/)).toBeNull();
    fireEvent.change(screen.getByPlaceholderText('Best purchase ever!'), { target: { value: 'NiceProduct' } });
    expect(screen.getByText(/NiceProduct/)).toBeInTheDocument();

    expect(screen.queryByText(/it is a usefull tool/)).toBeNull();
    fireEvent.change(screen.getByPlaceholderText('Why did you like the product or not?'), { target: { value: 'it is a usefull tool' } });
    expect(screen.getByText(/it is a usefull tool/)).toBeInTheDocument();

    expect(screen.queryByText(/Harry/)).toBeNull();
    fireEvent.change(screen.getByPlaceholderText('jackson11!'), { target: { value: 'Harry' } });
    expect(screen.getByText(/Harry/)).toBeInTheDocument();

    expect(screen.queryByText(/harry@gmail.com/)).toBeNull();
    fireEvent.change(screen.getByPlaceholderText('jackson11@gmail.com'), { target: { value: 'harry@gmail.com' } });
    expect(screen.getByText(/harry@gmail.com/)).toBeInTheDocument();

    // Unit test for button, those buttons are existing
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Close/i })).toBeInTheDocument();

  });
});