function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; // Correct behavior
  } else if (a === 0) {
    return b; // Correct behavior
  } else if (b === 0) {
    return a; // Correct behavior
  } else {
    return a + b; // Correct behavior if a and b are numbers.  Incorrect if they are strings
  }
}

console.log(foo(1, 2)); // 3
console.log(foo(0, 0)); // 0
console.log(foo(0, 5)); // 5
console.log(foo(5, 0)); // 5
console.log(foo('1','2')); // '12' unexpected string concatenation