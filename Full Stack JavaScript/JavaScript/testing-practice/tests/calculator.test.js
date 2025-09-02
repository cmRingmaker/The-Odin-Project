import calculator from "../code/calculator";

test("A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation ", () => {
  expect(calculator(3, "+", 3)).toBe(6);
});

test("A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation ", () => {
  expect(calculator(425, "-", 5)).toBe(420);
});

test("A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation ", () => {
  expect(calculator(10, "*", 10)).toBe(100);
});

test("A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation ", () => {
  expect(calculator(30, "/", 10)).toBe(3);
});
