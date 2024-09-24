// Example usage:
// const nums = [2, 4, 3, 5, 7, 8, -1, 0, -2, 9];
// const target = 7;

function sumOfTarget(nums, target) {
  const arrLen = nums.length;
  const nArr = [];
  for (let i = 0; i < arrLen - 1; i++) {
    for (let j = 0; j < arrLen - 1; j++) {
      if (
        i !== j &&
        nums[i] + nums[j] == target &&
        !nArr.find((data) => data?.find((data) => data === nums[i]))
      ) {
        console.log([nums[i], nums[j]]);
        nArr.push([nums[i], nums[j]]);
      }
    }
  }
  return nArr;
}
// console.log(sumOfTarget(nums, target));
function dublicateTest(arr, num) {}

// console.log([[1,2], [3,4]].find(data => data.find(data => data === 5)));
console.log(!![2, 4]);

// console.log([1,2, 3,3,4,4,5].find(data => data == 6))
// Expected Output: [[-2, 9], [-1, 8], [0, 7], [2, 5], [3, 4]]

// const address = {
//     name: "Ravi",
//     place: "Bangalore",
// }

// function newObj(address, refPro, newPro) {
//   const proVal = address[refPro];
//   address[newPro] = proVal;
//   return address;
// }

// console.log(newObj(address,'name', 'firstname'));
// const address_2 = address;

// address_2 === address;

// let obj1 = {};
// let obj2 = {};
