function calculator(a, op, b) {
  if (op === "+") {
    return a + b;
  }

  if (op === "-") {
    return a - b;
  }

  if (op === "x" || op === "*") {
    return a * b;
  }

  if (op === "/") {
    return a / b;
  }
}

export default calculator;
