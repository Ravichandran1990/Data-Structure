let arr = [3,5,8,8,9,7,7,7,10,11,12];

let obj = {};
for(let i = 0; i < arr.length; i++) {
   if(obj[arr[i]]) {
      obj[arr[i]] += 1;
   }else {
      obj[arr[i]] = 1
   }
}
const arr1 = Object.values(obj);
let max = 0;
for(let j = 0; j < arr1.length; j++ ){
  if(arr1[j] > max){
      max = arr1[j];
  }
}
const findMaxIndex = arr1.indexOf(max);

//console.log(Object.values(obj));
console.log(Object.keys(obj)[findMaxIndex]);

const obj = {
  name: "ravi",
  lname: "Mohan"
}
const {name} = obj;
console.log(name);
const arr = [1,2,3,4,5];
const arr1 = [2,4,5,6];
const arr2 = [...arr, arr1];
const [name, ...rest] = arr2;
console.log(name)
