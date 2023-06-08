/* 
Extract last names of people named Michael */

/* 
function getMichaelLastName(inputText) {
    const regex = /Michael\s([A-Z][a-z]+)/g;
    const matches = inputText.match(regex);
    const lastNames = matches.map(match => match.split(" ")[1]);
    return lastNames;
  }
  
  console.log(getMichaelLastName("MichaelDavid")) */

  /* ----------------------------------------------------------------------- */


/* multiples of 3 or 5 */

/* function solution(number) {
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

  console.log(solution(5)) */

  /* ------------------------------------------------ */



/* THE HASHTAG GENERATOR */

/* function generateHashtag(str) {
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

 */
/* 
let num = 10;


for (i = 0; i <= num; i++) {
  let sum = 0;
  
  if (i % 3 === 0 || i % 5 === 0){
    if (i === 0) continue;
    for (i = 0; i < sum; i++){
      console.log(sum+i)
    }
     */


  

   



/* ============================================================================================================================ */


var kitchen = {
  tools : "span",
  food : "rice",                      /* calling method within an object */
  cooking:(tool, food2) => {
    console.log('the combination can be processed')
    console.log(kitchen.tools + "can be used in cooking " + this.food) /* this key */
    return tool + " " + food2  +" can make a good combination"
  }
  
}

console.log(kitchen.cooking("cock", "rice"))



/* ============================================= */



/* ================================ iteration for.. in and for.. of*/


var num = [2, 4, 5, 6, 8]

for(i of num){
  console.log(i)    /* it is used on iterable strings, arrays ,numbers,sets and maps */
}


const house = {
  rooms: 5,                       /* in iterates over object properties */
  garage: 1,
  bathroom: 2,
  operations: () => {
    return "vacations"
  },

 
}
for(role in house){
  console.log(role + ":" + house[role])
}


/* map is a an array method that changes items of an array but it doesnt change the main var*/


var tools = [1, 2, 4, 5]


console.log(tools.map(() => 3))

console.log(tools)

