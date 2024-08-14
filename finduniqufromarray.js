let input = [1,2,4,6,2,3,6];
let newA = [];
let obj = {};
for(let i = 0; i< input.length; i++) {
    let count = 0;
    for(let j = 0; j < input.length; j++){
        if(input[i] == input[j]) {
            count +=1;
        }
    }
    if(count <= 1) {
        newA.push(input[i])
    }
    //console.log(count+' '+input[i])
}
console.log(newA);