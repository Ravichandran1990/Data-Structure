let arr = [
  {
    name: "simon",
    state: "CA",
    role: "developer",
  },
  {
    name: "simon_1",
    state: "CA_1",
    role: "software",
  },
  {
    name: "simon_2",
    state: "CA_2",
    role: "tester",
  },
  {
    name: "simon_3",
    state: "TX",
    role: "developer",
  },
  {
    name: "simon_4",
    state: "TX",
    role: "developer",
  },
];
let findRole = "developer";
const fArr = arr
  .filter((data) => {
    return data.role == findRole;
  })
  .reduce((parr, data) => {
    // console.log(data['state'])
    if (parr.indexOf(data["state"]) == -1) {
      parr.push(data["state"]);
    }
    return parr;
  }, []);

console.log(fArr);
