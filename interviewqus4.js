//What does the following code print?
// console.log("one");
// setTimeout(function () {
//   console.log("two");
// }, 0);
// Promise.resolve().then(function () {
//   console.log("three");
// });
// console.log("four");

//What will the code below output to the console and why?
// if(true) {

// }

(function () {
    var b = a = 3;    
})();



console.log("a defined? " + (typeof a != "undefined"));
console.log("b defined? " + (typeof b == "undefined"));

//What is the value of foo.length?
// var foo = [];
// foo.push(1);
// foo.push(2);
// foo.push(3);
// console.log(foo);
