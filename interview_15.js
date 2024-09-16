let arr = [1, 2, [3, 5, [3, 5, 6]], 5, 6, [6, 7]];

const arr_1 = [];
function customeArr(arrData) {
  for (let i = 0; i < arrData.length; i++) {
    if (typeof arrData[i] === "object") {
      customeArr(arrData[i]);
    } else {
      arr_1.push(arrData[i]);
    }
  }
}

customeArr(arr);
console.log(arr_1);
let dublicate = [];
const arr_2 = arr_1.reduce((pre, curr) => {
  if (pre.indexOf(curr) === -1) {
    pre.push(curr);
  } else {
    dublicate.push(curr);
  }
  return pre;
}, []);
console.log(dublicate);

let obj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: {
      f: 1,
      d: 4,
    },
  },
};
let obj_1 = JSON.parse(JSON.stringify(obj));

obj_1.c.d = 5;
console.log(obj);
console.log(obj_1);

function Outer() {  
    this.value = 2;   
    setTimeout(() => {
        console.log(this.value); 
    }, 1000);
}
 new Outer();
 
 //console.log([] == ![]);
 
//console.log([] - []);