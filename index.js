//Longest Substring find from defined strings

function longestsubString(str) {
  //console.log(str.substring(0, 4));
  const arr = [];
  for (let index = 0; index < str.length; index++) {    
    for (let index1 = (index); index1 < str.length; index1++) {          
        const inserString = str.substring(index, (index1));      
        if((inserString.includes(str[index1]))) {            
            arr.push(inserString);
            break;            
        }  
    }
  }
  return arr;
}
const test = "bbbbsdsiiesds";
// const test = "Ravichandran";
console.log(longestsubString(test));
const charArr = longestsubString(test);
let maxCharaterCount = 0;
let maxCharacter = "";
for (let index = 0; index < charArr.length; index++) {
  if (charArr[index].length >= maxCharaterCount) {
    maxCharaterCount = charArr[index].length;
    maxCharacter = charArr[index];
  }
}
console.log(maxCharacter);
