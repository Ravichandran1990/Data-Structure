// (function(){
//     setTimeout(()=> console.log(1),2000);
//     console.log(2);
//     setTimeout(()=> console.log(3),0);
//     Promise.resolve().then(() => console.log('Promise'));
//     console.log(4);
//   })();

  //2
  //Promise
  //4
  //3
  //1

//   function func2(){
//     for(var i = 0; i < 3; i++){
//       setTimeout(() => console.log(i), i*2000);
//     }
//   }
//   func2();
const input = [
    {
      name: "cat",
      value: 17,
      group: "animal",
    },
    {
      name: "tesla",
      value: 11,
      group: "car",
    },
    {
      name: "bmw",
      value: 23,
      group: "car",
    },
    {
      name: "dog",
      value: 5,
      group: "animal",
    },
    {
      name: "snak",
      value: 7,
      group: "animal",
    },
  ];
  //Output
//   [
//     {
//         "name": "animal",
//         "children": [
//             "cat",
//             "dog",
//             "snak"
//         ]
//     },
//     {
//         "name": "car",
//         "children": [
//             "tesla",
//             "bmw"
//         ]
//     }
// ]

const groupUniq = input.reduce((arr, data) => {
    const findUniqgroup = arr.find(item => item === data.group);
   // console.log(findUniqgroup);
    
    if(!findUniqgroup) {
        arr.push(data.group);
    }
    return arr;
}, []).map(data => {
    const obj = {};
    obj.name = data;
    obj.children = input.filter(data_1 => data_1.group == data).map(data => data.name);
    return obj;
});



console.log(groupUniq);
