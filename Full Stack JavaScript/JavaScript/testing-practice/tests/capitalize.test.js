import capitalize from "../code/capitalize";

test("A capitalize function that takes a string and returns it with the first character capitalized.", () => {
  expect(capitalize("capitalize this string")).toBe("Capitalize this string");
});
