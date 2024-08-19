//Sumallest Second array from matrix
const matrix = [[2,3,4,5], [3,4,5,6,6]];
const compainMat = [...matrix[0], ...matrix[1]];
const sortA = compainMat.sort((a, b) => a - b);
const uniqVal = [];
const n = 2;
for (let i = 0; i < sortA.length; i++) {
    if(uniqVal.indexOf(sortA[i]) == -1){
        uniqVal.push(sortA[i]);
    }
    
}
console.log(uniqVal[2 -1]);
