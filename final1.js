function createCounter() {
  // This variable is part of the lexical scope of createCounter.
  let count = 0;

  // This inner function forms a closure.
  return function () {
    count++; // It remembers and accesses the count variable from its parent's scope.
    return count;
  };
}

// Replace "Sok Dara" with your full name
console.log('Student Name: Phol Sopheaktra');

// Create a counter instance
const counter = createCounter(); // Call the function to get a counter function

// Call the counter function and log the result
console.log(counter()); // Outputs: 1
console.log(counter()); // Outputs: 2
console.log(counter()); // Outputs: 3

