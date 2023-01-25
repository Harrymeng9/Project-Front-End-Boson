describe("Example tests", function () {
  var stack = [];
  test("Should rework", () => {
    stack.push(1);
    expect(stack.pop()).toEqual(1);
  });
});