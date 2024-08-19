const arrS = [2,3,4,5,6,8,1];

for (let i = 0; i < arrS.length; i++) {
    for (let j = 0; j < arrS.length; j++) {
        if(arrS[i] < arrS[j]){
            [arrS[i], arrS[j]]=[arrS[j], arrS[i]];
            // console.log(arrS);
            
        }
        
    }
    
}
//const arrSo = arrS.sort((a,b) => a - b);
console.log(arrS);
