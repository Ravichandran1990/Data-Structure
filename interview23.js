//Max Occurance find arra values
const nums = [1, 3, 1, 2, 2, 3, 3, 3];
const k = 2;
//Output: [1,2]
const obj = {};
for (let i = 0; i < nums.length; i++) {
  if (obj[nums[i]]) {
    obj[nums[i]] = obj[nums[i]] + 1;
  } else {
    obj[nums[i]] = 1;
  }
}
console.log(obj);
console.log(Object.values(obj).sort((a, b) => b - a));

console.log(Object.keys(obj).slice(0, k));
