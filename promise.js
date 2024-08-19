const promise1 = Promise.resolve("First");
const promise2 = Promise.resolve("Second");
const promise3 = Promise.reject("Third");
const promise4 = Promise.resolve("Fourth");

const runPromises = async () => {
  const res1 = await Promise.allSettled([promise1, promise2]);
  const res2 = await Promise.allSettled([promise3, promise4]);
  return [res1, res2];
};

runPromises()
  .then((res) => console.log([...res].flat(2)))
  .catch((err) => console.log(err));
