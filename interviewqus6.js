// For interview question for dublicate array sorting
const arr = [
    {
        id: 1,
        name: "ravi"
    } ,   
    {
        id: 2,
        name: "ravi_1"
    } ,   
    {
        id: 3,
        name: "ravi_3"
    },   
    {
        id: 1,
        name: "ravi"
    },
    {
        id: 1,
        name: "ravi"
    } ,   
    {
        id: 2,
        name: "ravi_1"
    } ,   
    {
        id: 3,
        name: "ravi_3"
    },   
    {
        id: 1,
        name: "ravi"
    },
    {
        id: 1,
        name: "ravi"
    }
   ];
   let arrD = [];
   for(let i = 0; i < arr.length; i++){
       const dArr = arrD.filter((data, index) => {
           if(data.name == arr[i]['name']){
               arrD[index] = {...data, id: (data.id + arr[i]['id'])}
               return data;
           }
           
       });
        if(dArr.length === 0){
          arrD.push(arr[i]);
        }
   }
   console.log(arrD)