function fairIndexes(A, B) {
    let count = 0;
    let sumA = 0;
    let sumB = 0;
  
    // Calculate the total sum of both arrays
    for (let i = 0; i < A.length; i++) {
      sumA += A[i];
      sumB += B[i];
    }
  
    let leftSumA = 0;
    let leftSumB = 0;
  
    for (let i = 0; i < A.length - 1; i++) {
      leftSumA += A[i];
      leftSumB += B[i];
  
      // Check if the sums are equal for both halves
      if (
        leftSumA === sumA - leftSumA &&
        leftSumB === sumB - leftSumB &&
        leftSumA === leftSumB
      ) {
        count++;
      }
    }
  
    return count;
  }
  
  const A = [2, 4, 5, 1];
  const B = [3, 3, 10, -4];
  const result = fairIndexes(A, B);
  
  console.log(result);