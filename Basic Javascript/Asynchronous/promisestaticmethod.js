const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 500));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 1000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 1500));
const promise4 = new Promise((resolve, reject) =>
  setTimeout(() => reject("opps"), 200)
);

Promise.all([promise1, promise2, promise3]).then((result) =>
  console.log(result)
);

Promise.race([promise1, promise2, promise3]).then((result) =>
  console.log(result)
);

Promise.race([promise1, promise2, promise3, promise4]).catch((result) =>
  console.log(result)
);
