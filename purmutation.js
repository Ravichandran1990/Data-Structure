const str = "ABC";
let strA = [];

function swap(str, i, l) {
    [str[i], str[l]] = [str[l], str[i]];
    return str.join('');
}
for(let i=0; i< str.length; i++){
    let strC = str[i];
    for(let j = 0; j < str.length; j++){
        if(str[i] !== str[j]) {
            strC = strC + str[j]
        }
    }
    let purStr = swap(strC.split(''), strC.length - 1, strC.length);
    console.log(strC , purStr)
    strA.push(strC, purStr);
}
console.log(strA);