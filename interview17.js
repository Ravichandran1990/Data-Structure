async function asyncTask1() {
    return new Promise((resolve, reject) =>
      setTimeout(() => resolve("Task 1 got success"), 1000)
    );
  }
  
  async function asyncTask2() {
    return new Promise((resolve, reject) =>
      setTimeout(() => reject("Task 2 error"), 1000)
    );
  }
  
  async function sequentialTasks() {
    try {
      const [result1, result2] = await Promise.all([asyncTask1(), asyncTask2()]);
      console.log("Ree", result1, result2); // Both tasks run concurrently
    } catch (e) {
      console.error("e1", e);
    }
  
    
  }
  sequentialTasks();