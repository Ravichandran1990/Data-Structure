let input = [
    {name: 'firstname', value: 'johndoe'},
    {name: 'age', value: '28'},
    {name: 'language', value: 'English'},
    {name: 'language', value: 'Tamil'},
    {name: 'language', value: 'Hindi'},
];
let obj = {};
for(let i = 0; i < input.length; i++){
    if(obj[input[i]['name']]) {
        const arra = [obj[input[i]['name']]];
        //console.log(arra)
        obj[input[i]['name']] = [...arra, (input[i]['value'])]
    }else {
        obj[input[i]['name']] = input[i]['value']
    }
    // obj[input[i]['name']] = input[i]['value']
    // console.log(input[i]['value'])
}
console.log(obj)
// const arr = ['ravi', 'chand'];
// console.log([...arr, 'value'])