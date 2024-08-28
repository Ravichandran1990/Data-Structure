// (function immediateA(a){   
//     return (function immediateB(b) {
//         console.log(a);
//     })(1);
// })(0);

// for (var i = 0; i < 3; i++){
//     setTimeout(function log() {  
//         console.log(i); // What is logged?
//     }, 1000); 
// }
// const object = {
//     who: 'World',
//     greet() {  
//         return `Hello, ${this.who}!`;
//     },
//     farewell: () => {    
//         return `Goodbye, ${this.who}!`;
//     } 
// }; 
// console.log(object.greet());    // What is logged?
// console.log(object.farewell()); // What is logged?

//   try {     
//         console.log("starting");  
//         setTimeout(() => {    
//             try {
//                  console.log("inside setTimeout");
//                  throw new Exception("error");
//             } catch(e) {
//                 console.log("in catch");
//             }
//         },10);   
//         console.log("just before catch");
//     } 
//     catch (e) {      
//         console.log("in catch"); 
//     } 
//     console.log("outside try");
    //starting
    //just before catch
    //outside try
    //inside timeout
    //in catch
    
// input : thisIsATest   
// output : This_Is_A_Test
// Input - [1, [2], [3 , [4]]] 
// Output - [1,2,3,4]
    
    
    
    
    
    