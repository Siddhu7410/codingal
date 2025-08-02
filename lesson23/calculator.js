function simpleCalculator(a, b, operator) {
  var result;

  if (operator === "+") {
    result = a + b;
  } else if (operator === "-") {
    result = a - b;
  } else if (operator === "*") {
    result = a * b;
  } else if (operator === "/") {
    result = a / b;
  } else {
    console.log("Invalid operator");
    return;
  }

  console.log("Result: " + result);
}

// Example usage:
simpleCalculator(10, 5, "+"); // Output: Result: 15
simpleCalculator(10, 5, "-"); // Output: Result: 5
simpleCalculator(10, 5, "*"); // Output: Result: 50
simpleCalculator(10, 5, "/"); // Output: Result: 2