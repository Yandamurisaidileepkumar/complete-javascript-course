// let country = "India";
// let continent = "Asia";
// let population = "1.4m millions";
// console.log(country);
// console.log(continent);
// console.log(population);

// let isIsland = "Andaman&Nicobar islands";
// console.log(isIsland);
// console.log(typeof isIsland);
// isIsland = true;
// console.log(isIsland);
// console.log(typeof isIsland);
// let language;
// console.log(language);
// console.log(typeof language);
// console.log(typeof country);
// console.log(typeof population);

// let,const and var

// const language = "telugu";
// console.log(language);

// let knownLanguage = "telugu";
// knownLanguage = "hindi";
// console.log(knownLanguage);

// var lang = "kannada";
// var lang = "english";
// console.log(lang);

// let popMain = 1400000;
// console.log(popMain);
// let halfPop = popMain / 2;
// console.log(halfPop);
// halfPop++;
/* // console.log(halfPop);
PopFin = 600000000;
PopInd = 1400000000;
console.log(PopInd > PopFin);
let description =
  "Portugal is in Europe, and its 11 million people speak portuguese";
console.log(description); */

// let finPop = 110000000;
// let description = `portugal is in Europe and its ${finPop} people speak portuguese`;
// console.log(description);

/* let IndPop = 1417170000;
if (IndPop > 33000000) {
  console.log("Portugal's population is above average");
} else {
  console.log("Portugal's population is 22 million below average");
}
 */
/* 9' - '5';
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2; */
/* console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2); */

// falsy and truthy value
//the falsy value are 0,NAN,Undefined,Null,""-empty string
// truthy values are {},[],if space is there between the empty string then it is a truthy value
// let emp = "";
// if (emp) {
//   console.log("not an empty");
// } else {
//   console.log("empty");
// }

// equality operators

/* 1. Declare a variable 'numNeighbours' based on a prompt input like this: 
prompt('How many neighbour countries does your country 
have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality 
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when 
'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of 
'numNeighbours'. Notice what happens when there is exactly 1 border! Why 
is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now 
when you input 1
8. Reflect on why we should use the === operator and type conversion in this 
situation */

/* numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);
console.log(numNeighbours);
console.log(typeof numNeighbours);
if (numNeighbours === 1) {
  console.log("only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
} */

//Logical Operators

/* let conName = "United States Of America";
let conLang = "English";
let conPop = 500000000;
if (conLang === "English" && conPop <= 500000000) {
  console.log(
    "country meets Sarah's criteria and sarah can live in the country "
  );
} else {
  console.log(
    "country doesn't meet Sarah's criteria and sarah cannot live in the country "
  );
}
 */

//switch challenge using if /else

/* let day = "sunday";
if (day === "monday") {
  console.log("plan course structure");
  console.log("go to coding meetup");
} else if (day === "tuesday") {
  console.log("prepare theory videos");
} else if (day === "thursday" || day === "wednesday") {
  console.log("write code examples");
} else if (day === "friday") {
  console.log("Record Videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("enjoy the weekend😍");
} else {
  console.log("not a valid day!");
} */
