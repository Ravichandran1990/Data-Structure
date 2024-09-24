function skipTake(arr, skip, take) {
  let nArr = [];
  for (let i = 0; i < arr.length; i++) {
    //console.log(arr)
    arr.splice(0, skip);
    nArr.push(...arr.splice(0, take));
  }
  return nArr;
}
const list = Array.from(Array.from({ length: 23 }, (_, i) => i + 1));
//skipTake(list, 2, 5)
console.log(skipTake(list, 2, 5));
// // OUTPUT = [3,4,5,6,7,10,11,12,13,14...]

/**
 * Time conversion from 12 hrs to 24 hrs format
 * @prama {string} s - time e.g. 07:05:45PM
 * @return {string} - time e.g. 19:05:45
 */
// function timeConversion(s) {
//     let newStr = '';
//     let splitTime = s.split(':');
//     let [hour, minute, sec] = splitTime;
//     let sec_1 = sec.slice(0,2);
//     let format = sec.slice(2,sec.length);
//     if(format === 'PM'){
//         hour = 12 + parseInt(hour);
//         newStr = `${hour}:${minute}:${sec_1}`
//     }else {
//       newStr = `${hour == 12 ? '00' : hour}:${minute}:${sec_1}`
//     }
//     return newStr;
// }

// console.log(timeConversion('12:05:45AM'))
