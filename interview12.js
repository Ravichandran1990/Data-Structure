//Reduce using inline execution

const arr = [1, 6, 7, 65, 98, 90, 23];

const obj = {
  odd: [],
  even: [],
};
const result = arr.reduce((pre, cur) => test(pre, cur), obj);
console.log(result);
function test(pre, cur) {
  if (cur % 2 == 0) {
    pre.even.push(cur);
  } else {
    pre.odd.push(cur);
  }
  return pre;
}
//     return pre;
