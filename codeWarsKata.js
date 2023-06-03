/* 
Extract last names of people named Michael */


function getMichaelLastName(inputText) {
    const regex = /Michael\s([A-Z][a-z]+)/g;
    const matches = inputText.match(regex);
    const lastNames = matches.map(match => match.split(" ")[1]);
    return lastNames;
  }
  
  console.log(getMichaelLastName("MichaelDavid"))

  /* ----------------------------------------------------------------------- */


/* multiples of 3 or 5 */

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

  console.log(solution(5))

  /* ------------------------------------------------ */



/* THE HASHTAG GENERATOR */

function generateHashtag(str) {
    if (str.trim() === "") {
      return false;
    }
  
    const words = str.trim().split(/\s+/);
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const hashtag = "#" + capitalizedWords.join("");
  
    if (hashtag.length > 140) {
      return false;
    }
  
    return hashtag;
  }
  
  console.log(generateHashtag("david shema"))