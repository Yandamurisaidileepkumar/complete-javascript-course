// function fruitProcessor(apple, oranges) {
//   console.log(apple, oranges);
//   const juice = `jucie with ${apple} apples and ${oranges} oranges`;
//   return juice;
// }
// console.log(fruitProcessor(5, 5));

// arrowfunction
/* let retirementAge = (birthYear, Name) => {
  let age = 2022 - birthYear;
  let retirement = 65 - age;
  return `the name is ${Name} and the retirmentage is ${retirement}`;
};
let add = retirementAge(1998, "Dileep");
let add2 = add(1999, "narsimha");
console.log(add2); */

/* function retirement(birthday) {
  let age = 2023 - birthday;
  let retirementAge = 65 - age;
  return retirementAge;
}
let add = retirement(1998);
let add2 = add(1999);
console.log(add2);
 */

// function calling within another function
/* let fruitCutter = function (fruit) {
  return fruit * 3;
};

let juicer = function (apples, oranges) {
  let applepieces = fruitCutter(apples);
  let orangepieces = fruitCutter(oranges);
  return `the juice is madeup of ${applepieces} applepices and ${orangepieces} orangepieces.`;
};
console.log(juicer(2, 3)); */

// functions

let calAge = function (year) {
  return 2023 - year;
};

let retirement = function (birthyear, fName) {
  let age = calAge(birthyear);
  let retirementAge = 65 - age;
  return `the name of the candidate is ${fName} and the retirementage is ${retirementAge}`;
};
console.log(retirement(1999, "srinu"));
