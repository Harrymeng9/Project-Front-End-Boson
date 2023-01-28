/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, getByText } from '@testing-library/react';
import  Overview from './Overview.jsx';
import  InfoList from './ovComponents/infoList.jsx';
import  InfoSingle from './ovComponents/infoSingle.jsx';
import '@testing-library/jest-dom';


describe("Example tests", function () {
  var stack = [];
  test("Should fire an example test", () => {
    stack.push(1);
    expect(stack.pop()).toEqual(1);
  });
});

describe("Test Overview and Component Renders", function () {
  test("Overview is a function", () => {
    expect(typeof Overview).toBe('function')
  });

  test('renders Overview', () => {
    //var waiter =  Overview();
    render(<Overview/>);
    //render(<Overview></Overview>)
    //console.log('waits', waiter)
    // think of screen as the execution environment
    //testting the code, provide the same env as we are providing
    //screen = index.html; screen is a native html provided by testing lib
    expect(screen.getByText(/Loading/)).toBeInTheDocument();
  });

  test('renders pre-state InfoSingle', () => {
    //var waiter =  Overview();
    render(<InfoSingle/>);
    expect(screen.getByText(/STAR/)).toBeInTheDocument();
  });

  test('renders pre-state InfoSingle', () => {
    //InfoSingle can only take in an array, since it runs a map function on the props
    var obj = [{
      name: 'Morning Joggers',
      category: 'Pants',
      description: "Whether you're a morning person or not.  Whether y…ym bound or not.  Everyone looks good in joggers.",
      default_price: '40.00',
      slogan: 'Make yourself a morning person'
    }]
    render(<InfoList info={obj}/>);
    expect(screen.getByText(/List/)).toBeInTheDocument();
  });

});