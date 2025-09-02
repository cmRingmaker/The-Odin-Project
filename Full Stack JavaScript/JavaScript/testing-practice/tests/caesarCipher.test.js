import caesars from "../code/caesars";

test("Example 1", () => {
  expect(caesars("abc", 1)).toMatch(/bcd/);
});

test("Example 2", () => {
  expect(caesars("abcdezz", 3)).toMatch(/defghcc/);
});

test("Example 3", () => {
  expect(caesars("", 1)).toMatch(/^$/);
});
