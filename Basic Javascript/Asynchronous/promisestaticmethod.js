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

Promise.allSettled([promise1, promise2, promise3]).then((result) =>
  console.log(result)
);

// fulfilled sample
const promiseResolve1 = new Promise((resolve, reject) => setTimeout(() => resolve("1"), 1000));
const promiseResolve2 = new Promise((resolve, reject) => setTimeout(() => resolve("2"), 2000));
const promiseResolve3 = new Promise((resolve, reject) => setTimeout(() => resolve("3"), 3000));

Promise.any([promiseResolve1, promiseResolve2, promiseResolve3])
 .then((value) => console.log(value)) // 1
 .catch((error) => console.log(error.message));

// rejected sample
const promiseReject1 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('1')), 1000));
const promiseReject2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('2')), 2000));
const promiseReject3 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("3")), 3000));

Promise.any([promiseReject1, promiseReject2, promiseReject3])
 .then((value) => console.log(value))
 .catch((error) => console.log(error.message)); // All Promises were rejected