function displayNumberPattern(rows) {
    for (let i = 0; i < rows; i++) {
      let row = '';
      for (let j = rows; j > i; j--) {
        row += '1 ';
      }
      console.log(row);
    }
  }
  
  displayNumberPattern(4);