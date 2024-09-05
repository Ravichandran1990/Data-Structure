let json = [
  {
    name: "Asia",
    child: [
      {
        name: "India",
        child: [
          {
            name: "Karnataka",
            child: [
              {
                name: "Bangalore",
              },
            ],
          },
        ],
      },
    ],
  },
];
let names = [];
function recursive(obj) {
  //console.log(obj['child']);
  if (typeof obj["child"] === "object") {
    for (let i = 0; i < obj["child"].length; i++) {
      recursive(obj["child"][i]);
    }
  }
  //console.log(obj.name)
  names.push(obj.name);

  return names;
}
let str = json.map((data) => {
  return recursive(data);
});
console.log(str.flat(1));
