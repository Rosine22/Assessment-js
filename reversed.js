function reverseString(inputString) {
    return inputString.split('').reverse().join('');
  }
  
  
  const originalString = "Hello, There!";
  const reversedString = reverseString(originalString);
  console.log(`Original String: ${originalString}`);
  console.log(`Reversed String: ${reversedString}`);
  