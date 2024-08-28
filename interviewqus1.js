
const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Japan",
    "Brazil",
    "Germany",
    "France",
    "India",
    "China"
  ];
  let obj = {};
  for(let i = 0; i < countries.length; i++) {
      let lengthCountriStr = countries[i].length;
      //console.log(lengthCountriStr);
      if(!!(obj[lengthCountriStr])) {
          //console.log(obj[lengthCountriStr])
          const exsitObj = obj[lengthCountriStr];
          //console.log(exsitObj);
          obj[lengthCountriStr] = exsitObj.concat(countries[i]);
      }else {
          obj[lengthCountriStr] = [countries[i]]
          
      }
  }
  console.log(obj);
  
  // const a = [
  //   {uuid: 1, role: 'admin'},
  //   {uuid: 2, role: 'contributor'},
  //   {uuid: 3, role: 'owner'},
  //   {uuid: 4, role: 'contributor'}
  // ]
   
  // const b = [
  //   {uuid: 2, name: 'Roger'},
  //   {uuid: 3, name: 'Steve'},
  //   {uuid: 4, name: 'Tom'},
  //   {uuid: 5, name: 'Garry'}
  // ]
  // const concArr = [...a, ...b];
  // //console.log(concArr);
  // const arr = [];
  // for(let i = 0; i< concArr.length; i++){
  //     const filterArr = concArr.filter((data) => {
  //         return data.uuid === concArr[i].uuid;
  //     });
  //     //console.log(filterArr)
  //     let obj = {role: null, name: null};
  //     for(let j= 0; j < filterArr.length; j++){
  //         obj = {...obj, ...filterArr[j]};
  //     }
  //     arr.push(obj);
  // }
  // console.log(arr);
  