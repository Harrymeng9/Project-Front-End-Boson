import Overview from './Overview.jsx'
import {expect, jest, test} from '@jest/globals';

describe("Example tests", function () {
  var stack = [];
  test("Should rework", () => {
    stack.push(1);
    expect(stack.pop()).toEqual(1);
  });
});

// describe("Render", function () {
//   test("Should call", () => {
//     Overview();
//     expect(Overview).toHaveBeenCalled(expect.anything());
//   });
// });