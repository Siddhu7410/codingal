function printRandomNumbers(count) {
  for (var i = 0; i < count; i++) {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("Random number " + (i + 1) + ": " + randomNumber);
  }
}

// Call the function to print 5 random numbers
printRandomNumbers(5);
