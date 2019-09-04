// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();
(myFunction => {
    console.log("Function was invoked!");
})();

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");
anotherFunction = (param) => {
    return param;
}
anotherFunction("Exmaple");

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
add = (a, b) => {
   return a + b;
}
console.log(add(1,2));

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);
subtract = (a, b) => {
    return a-b;
}
console.log(subtract(1,2));
// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);
stretchArray = [1,2,3,4];
const triple = stretchArray.map((num) => {return num * 3;});
console.log(triple);
