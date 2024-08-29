const fruit = [
  { name: "John", fruit: "mango" },
  { name: "Thomas", fruit: "apple" },
  { name: "Mark", fruit: "orange" },
  { name: "Ronaldo", fruit: "banana" },
  { name: "Tom", fruit: "apple" },
];
// const obj = {};
const redData = fruit.reduce((obj, data) => {
  if (obj[data["fruit"]]) {
    obj[data["fruit"]] += 1;
  } else {
    obj[data["fruit"]] = 1;
  }
  return obj;
}, {});
//console.log(fruit[i]['fruit'])

console.log(redData);

// {
// apple:2,
// orange:1,
// mango:1,
// banana:1
// }
