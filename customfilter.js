// const arrS = [2,3,4,5,6,8,1];

// Array.prototype.customFilter = function(fun) {
//     const arr = [];        
//     for (let i = 0; i < this.length; i++) {
//         if(fun(this[i])) {
//             arr.push(this[i])
//         }
        
//     }
//     return arr
    
// }
// const fArr = arrS.customFilter((data) => {
//     return data > 4;
// });

// console.log(fArr);
// const arrS = [2,3,4,5,6,8];

// Array.prototype.customReduce = function(fun, initialVal) {          
//     for (let i = 0; i < this.length; i++) {
//         initialVal = fun(initialVal, this[i])        
//     }   
//     return initialVal
    
// }
// const fArr = arrS.customReduce((previous, data) => {
//     return previous + data;
// }, 0);

// console.log(fArr);

// const arrS = [2,3,4,5,6,8];
// const farr = _.filter(arrS, (data) => data > 4);
// console.log(farr);

let arr = ["apple", "mango",
    "apple", "orange", "mango", "mango"];

let num = [1,2,4,5,6,6,1,2,4,3];

Array.prototype.myFilter = function(fun,arr){
   for (let i = 0; i < this.length; i++) {
      fun(arr, this[i]);    
   }
return arr;
}
const filterArr = num.myFilter((current, item) => {
    if(current.indexOf(item) < 0) {
        current.push(item);
    }
}, []);
console.log(filterArr);



