//Maximum Repitation No;

const arr = [1,5,7,1,6,3,2,1,7];
const obj = {};
for(let i = 0; i < arr.length; i++) {
    if(obj[arr[i]]) {
        obj[arr[i]] += 1;
    }else {
        obj[arr[i]] = 1
    }
}
const arr1 = Object.values(obj);

console.log(Object.keys(obj));
let maxNo = Math.max(...arr1);
console.log(Object.keys(obj)[arr1.indexOf(maxNo)][0])