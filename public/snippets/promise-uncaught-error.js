const promise1 = new Promise((resolve, reject) => {
  reject(new Error("Rejected 1"));
});

const promise2 = new Promise((resolve, reject) => {
  reject(new Error("Rejected 2"));
});

queueMicrotask(() => {
  promise1.catch((error) => console.log(error.message));
});

setTimeout(() => {
  promise2.catch((error) => console.log(error.message));
}, 0);
