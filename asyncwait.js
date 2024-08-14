const test = async() => {
    const test = await new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Testing")
        }, 1000);
    })
    await console.log(test);
    await console.log("wait tile to executed");
    
}
test()