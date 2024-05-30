function displayEven() {
    const evenNumber = Math.floor(Math.random() * 50) * 2 + 2;
  
    console.log(`Random even number between 1 and 100: ${evenNumber}`);
  }
  
  displayEven();
  
  function square(num) {
    const squarenbr = num * num ;
    return squarenbr;
  }
  square() ;
  const nbr = 4 ;
  const squarednbr = square(nbr) ;
  console.log(squarednbr) ;
