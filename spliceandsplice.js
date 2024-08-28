// const arr = [0,1,2,3,4,5,6,7,8];
// console.log(arr.slice(1,1));
// console.log(arr.splice(1,1));
// console.log(arr);

const str = "ra".split('');
[str[0], str[1]] = [str[1], str[0]];
console.log(str.join(''));
