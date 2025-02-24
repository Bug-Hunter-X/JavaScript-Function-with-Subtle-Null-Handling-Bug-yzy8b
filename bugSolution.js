function foo(a, b) {
  if (a == null || b == null) {
    return 0; // Handle null or undefined values
  }

  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10

// Example of a runtime null that the original solution misses
let obj = {};
console.log(foo(5, obj.missingProperty)); // Output: 0 with the solution, throws error with the bug