'use strict';

// // scoping practice
// const myName = 'dileep';
// // myName will acts as the global scope
// const king = 'dileep';
// if (king === 'dileep') {
//   var queen = 'queen';
// }
// function first() {
//   const age = 30;
//   var loc = 'kakinada';
//   if (age >= 30) {
//     var millenal = true;
//     var decade = 3;
//   }
//   function second() {
//     const job = 'teacher';
//     console.log(
//       `${myName} is a ${age} old ${job} and he is from ${loc} and ${decade}`
//     );
//   }
//   second();
//   // console.log(millenal);
// }
// first();

// // console.log(loc);
// console.log(queen);
// const firstName = 'hike';
// function calcAge(birthyear) {
//   const age = 2023 - birthyear;
//   const firstName = 'dileep';
//   function printAge() {
//     const output = `your ${age} is and born in the year${birthyear}`;
//     console.log(output);
//     console.log(firstName);
//     // console.log(lastName);
//   }
//   // const firstName = 'dileep';
//   printAge();
//   // const firstName = 'dileep';
//   return age;
// const lastName = 'surya';
// }

// console.log(age);
// const firstName = 'dileep';

// console.log(calcAge(1998));
// calcAge(1998);
// console.log(age);
// const king = 'dileep';

/* if (king === 'dileep') {
  var queen = 'queen';
} */
// const firstName = 'hike';
// function calcAge(birthyear) {
//   const age = 2023 - birthyear;
//   const firstName = 'surya';
//   function printAge() {
//     const output = `your ${age} and you are and born in the year${birthyear}`;
//     console.log(output);
//     console.log(firstName);
//     const firstName = 'vasu';
//   }
//   printAge();

//   return age;
// }
// // const firstName = 'dileep';
// calcAge(1998);

/* const myName = 'dileep';
const job = 'fencing coach';
if (myName === 'dileep') {
  console.log(`my name is ${myName} and my occupation is ${job}`);
  const age = 2023 - 1999;
  console.log(age);
  // const job = 'fencing coach';
  // console.log(x);
}
 */
/* console.log(me);
console.log(job);
console.log(year);
// here the var variable will be given the undefined value according to the hoisting concept
// but where as in const and let the hoisting concept wont work and it show an error called cannot access before initialization
var me = 'dileep';
let job = 'fencing coach';
const year = 1999;
 */
/* var num = 10;
console.log(!num);
console.log(typeof !num);
 */

/* let a = 10;
let b = '20';
console.log(a + b);
console.log(typeof (a + b));
// let c = Number(undefined);
let c;
console.log(c);
 */
const self = this;

const jonas = {
  firstName: 'dileep',
  year: 1999,
  calcAge: function () {
    // console.log(this);
    console.log(2023 - this.year);

    const millineal = function () {
      console.log(this.year >= 1981 && this.year <= 1996);
      millineal();
    };
  },

  greet: () => {
    console.log(this);
    console.log(`hi this is ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

function parent() {
  counter++;
  function child() {
    var counter = 0;
    console.log(counter);
  }
  child();
  child();
  child();
}
parent();
