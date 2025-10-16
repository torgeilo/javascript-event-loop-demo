console.log("A");

setTimeout(() => console.log("B"), 0);

await new Promise((resolve) => {
  console.log("C");
  resolve();
}).then(() => {
  console.log("D");
});

console.log("E");
