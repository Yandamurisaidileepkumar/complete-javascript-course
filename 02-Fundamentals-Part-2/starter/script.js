// // function fruitProcessor(apple, oranges) {
// //   console.log(apple, oranges);
// //   const juice = `jucie with ${apple} apples and ${oranges} oranges`;
// //   return juice;
// // }
// // console.log(fruitProcessor(5, 5));

// // arrowfunction
// /* let retirementAge = (birthYear, Name) => {
//   let age = 2022 - birthYear;
//   let retirement = 65 - age;
//   return `the name is ${Name} and the retirmentage is ${retirement}`;
// };
// let add = retirementAge(1998, "Dileep");
// let add2 = add(1999, "narsimha");
// console.log(add2); */

// /* function retirement(birthday) {
//   let age = 2023 - birthday;
//   let retirementAge = 65 - age;
//   return retirementAge;
// }
// let add = retirement(1998);
// let add2 = add(1999);
// console.log(add2);
//  */

// // function calling within another function
// /* let fruitCutter = function (fruit) {
//   return fruit * 3;
// };

// let juicer = function (apples, oranges) {
//   let applepieces = fruitCutter(apples);
//   let orangepieces = fruitCutter(oranges);
//   return `the juice is madeup of ${applepieces} applepices and ${orangepieces} orangepieces.`;
// };
// console.log(juicer(2, 3)); */

// // functions

// /* let calAge = function (year) {
//   return 2023 - year;
// };

// let retirement = function (birthyear, fName) {
//   let age = calAge(birthyear);
//   let retirementAge = 65 - age;
//   return `the name of the candidate is ${fName} and the retirementage is ${retirementAge}`;
// };
// console.log(retirement(1999, "srinu"));
//  */

// // arrayscs..

// // let years = new Array(2020, 2021, 2022, 2023, 2024, 2025);

// // console.log(years);

// /* let a = "dileep";
// a = "surya";
// console.log(a); */

// /* function outer() {
//   let counter = 0;
//   function inner() {
//     counter += 2;
//     console.log(counter);
//   }
//   inner();
//   inner();
//   inner();
// }
// outer();
// outer();
// outer();
//  */

// /* const str = [1, 2, 3];
// const arr = [...str, 4, 5, 6, 7];
// console.log(arr); */

// /* let arr = ["dileep", "surya", "venu", ["vasu", "narasimha", "hari"]];
// // arr.push("narsimha");
// console.log(arr.length);
// console.log(arr[3][0]); */

// let employee = {
//   empfName: "dileep",
//   emplName: "kumar",
//   empid: 101,
//   empEmail: "yandamuridileepkumar16@gmail.com",
//   empLoc: "kakinada",
//   birthyear: 1998,
//   calcAge: function () {
//     console.log(this);
//     return 2023 - this.birthyear;
//   },
// };
// /* console.log(employee);
// console.log(employee.empfName + employee.emplName);

// let intrestedIn = prompt(
//   "what do you want about employee? select from the options empfName,emplName,empid,empEmail.empLoc"
// );
// console.log(employee[intrestedIn]);

// if (employee[intrestedIn]) {
//   console.log(employee[intrestedIn]);
// } else {
//   console.log(alert("wrong input please select from the options given"));
// } */

// employee.friends = ["surya", "venu", "vasu", "narasimha", "srikanth"];
// /* console.log(employee);
// console.log(employee.friends[0]); */

// // employee["newLoc"] = "nellore";
// // // console.log(employee);
// // employee["birthyear"] = 1998;
// // console.log(employee);

// // console.log(employee.calcAge());
// // function calAge(empfName) {
// //   employee.empfName = empfName;
// // }
// // let p1 = new calAge("king");
// // console.log(p1.empfName);
// // console.log(employee);

// function calcAge() {
//   this.age = 2023 - this.birthyear;
//   return this.age;
// }
// console.log(calcAge.call(employee));
// console.log(calcAge.call(employee));
// console.log(employee);

/* let number = Math.random() * 4;
console.log(number);
let number1 = number + 1;
console.log(number1); */

// let msg = alert("hi,Good Morning");
// console.log(msg);

//assignment

const population = [1441, 1393, 335, 798];
// console.log(population.length === 4);
const worldPop = 7900;
const country = ["China", "India", "USA", "UK"];
const percentages = [];
function percentageOfWorld1() {
  for (i = 0; i <= population.length - 1 && i <= country.length - 1; i++) {
    const sum = `${(population[i] / worldPop) * 100}`;
    console.log(
      `${country[i]}is a ${population[i]}million people, so it's about ${
        (population[i] / worldPop) * 100
      } of the world population`
    );
    percentages.push(sum);
  }
}

percentageOfWorld1(country, population, worldPop);
console.log(percentages);
console.log(percentages);
