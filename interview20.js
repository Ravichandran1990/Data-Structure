const user = {
  name: "John",
  location: {
    city: "New York",
    country: {
      name: "USA"
    },
  },
  address: {
    street: "Mark Street",
    buildingNo: 2,
  },
};

const updates = {
  age: 30,
  location: {
    city: "San Francisco",
    country: {
      name_1: 'India'
    }
  },
  address: {
    street: "Mark Street",
    buildingNo: 2,
    socityName: "XXXX",
  },
};
const userObj = Object.keys(updates);
for (let i = 0; i < userObj.length; i++) {
  if (user[userObj[i]]) {
    user[userObj[i]] = { ...user[userObj[i]], ...updates[userObj[i]] };
  } else {
    user[userObj[i]] = updates[userObj[i]];
  }
}

console.log(user);
//console.log({...user,...updates})
// output:
// {
//   name: "John",
//   age: 30, 
//   location: {
//     city: "San Francisco",
//     country: "USA"
//   }
// }
