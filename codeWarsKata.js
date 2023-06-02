/* 
Extract last names of people named Michael */


function getMichaelLastName(inputText) {
    const regex = /Michael\s([A-Z][a-z]+)/g;
    const matches = inputText.match(regex);
    const lastNames = matches.map(match => match.split(" ")[1]);
    return lastNames;
  }
  

  /* ----------------------------------------------------------------------- */


/* Extract names of people named michael: */

function solution(number) {
    if (number < 0) {
      return 0;
    }
  
    let sum = 0;
    for (let i = 1; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
  
    return sum;
  }

  

  /* ------------------------------------------------ */

