
function CharactersWithoutSpaces(inputString) {
    const characterCount = inputString.replace(/\s/g, '').length;
    return characterCount;
  }
  
  
  const inputString= "Hello World";
  const result = CharactersWithoutSpaces(inputString);
  console.log(`Number of characters without spaces: ${result}`);
