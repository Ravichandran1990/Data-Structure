let a = {
    x: 1,
    y: 2,
  };
let b = a; 
a.x = 5;
console.log(a);
console.log(b);

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(x == y);
console.log(x === y);
console.log(z == y); 