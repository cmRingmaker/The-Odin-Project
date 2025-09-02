import reverseString from "../code/reverse";

test("A reverseString function that takes a string and returns it reversed.", () => {
  expect(reverseString("Hello World!")).toBe("!dlroW olleH");
});
