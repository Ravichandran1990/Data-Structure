//Event Loop:
// The event loop continuously checks 
// if the call stack is empty. 
// If it is, it takes the first callback
//  in the queue and pushes it onto the call stack for execution. 
//  This process repeats, ensuring that asynchronous 
//  tasks are executed in the order they were completed. 

console.log("Loop Test1");

setTimeout(() => {
    console.log("Loop test2");
    
}, 10);
setTimeout(() => {
    console.log("Loop test3");    
}, 10);

// new Observable().subscribe(console.log)

const promiseEx = new Promise((resolve, reject) => {
    resolve("Loop test4")
});
promiseEx.then(console.log)
.catch(console.log)

