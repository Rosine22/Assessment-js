function calculateFactorial(n) {
    if (n === 0 || n === 1) {
      return 1; 
    } else {
      return n * calculateFactorial(n - 1);
    }
  }
  

  const numberToCalculate = 5;
  const factorialResult = calculateFactorial(numberToCalculate);
  console.log(`The factorial of ${numberToCalculate} is: ${factorialResult}`);
  