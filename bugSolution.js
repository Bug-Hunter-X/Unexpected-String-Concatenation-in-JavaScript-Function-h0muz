function foo(a, b) {
  // Type checking before performing operation
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Invalid input: Inputs must be numbers";
  } else if (a === 0 && b === 0) {
    return 0; 
  } else if (a === 0) {
    return b; 
  } else if (b === 0) {
    return a; 
  } else {
    return a + b; 
  }
}

console.log(foo(1, 2)); // 3
console.log(foo(0, 0)); // 0
console.log(foo(0, 5)); // 5
console.log(foo(5, 0)); // 5
console.log(foo('1','2')); // "Invalid input: Inputs must be numbers"
console.log(foo(1, '2')); // "Invalid input: Inputs must be numbers"