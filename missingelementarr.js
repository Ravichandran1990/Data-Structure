const arr = [2, 3, 11, 4, 30, 5, 63, 3, 2, 7];

const sArr = arr.sort((a, b) => a - b);
console.log("Sorted Array " + sArr);

for (let i = 0; i < sArr.length; i++) {
  for (let j = sArr[i]; j <= sArr[i + 1]; j++) {
    if (sArr[i] !== j && sArr.indexOf(j) == -1) {
      console.log("from array index " + sArr[i] + " " + j);
    }
  }
}
