// function person(fname, lname) {
//     let firstname = fname;
//     let lastname = lname;
//     // abstraction could not access this function from outside
//     let getDetails_noaccess = function () {
//         return (`No Access ${firstname}`);
//     }
//     // Encapsulate all data hiding show only on ecential data
//     this.getDetails_access = function () {
//         return (`First name is: ${firstname}, Last 
//             name is: ${lastname} ${getDetails_noaccess()}`);
//     }
// }
// let person1 = new person('Mukul', 'Latiyan');
// console.log(person1.firstname);
// // console.log(person1.getDetails_noaccess());
// console.log(person1.getDetails_access());


// function Cat(name) {
    
//     return function() {
//         return name + 'Testing'
//     };

// }

// function Animal(name) {
//     const cat = new Cat(name);
//     console.log(cat());
    
// }
// const animalObj = new Animal("Tiger");
const name = "Vivek";
let person = name;
var person_ = 123;
var demo1;

console.log(isNaN(name));
console.log(isNaN(person));
console.log(isNaN(person_));
console.log(isNaN(demo1));