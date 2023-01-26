import React from 'react';
import { render, screen, getByText } from '@testing-library/react';
import  Overview from './Overview.jsx';
import  InfoList from './ovComponents/infoList.jsx';
import renderer from 'react-test-renderer';

describe("Example tests", function () {
  var stack = [];
  test("Should fire an example test", () => {
    stack.push(1);
    expect(stack.pop()).toEqual(1);
  });
});

describe("Work Test", function () {
  // test that relatedProds in products function is a non-empty array
  //console.log('types', Overview().productGet)
  test("Overview is a function", () => {
    // console.log('actual test', InfoSingle().props)
    // screen(Overview)
    expect(typeof Overview).toBe('function')
  });

  test('renders correctly', async () => {
    var waiter = await Overview();
    console.log('waits', waiter)
  });




  // test("InfoList is a function", () => {
  //   var props = {
  //     name: 'Camo Onesie',
  //     category: 'Jackets',
  //     description: 'The So Fatigues will wake you up and fit you in. T…you blending in to even the wildest surroundings.',
  //     default_price: '140.00',
  //     slogan: 'Blend in to your crowd'
  //   }
  //   // console.log('actual test', InfoSingle().props)
  //   render(<InfoList/>, {container});
  //   screen.getByText(props)
  // });


});