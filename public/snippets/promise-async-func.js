setTimeout(() => console.log("A"), 0);

async function fun() {
  console.log("B");

  await new Promise((resolve) => {
    console.log("C");
    resolve();
  });

  console.log("D");
}

const promise = fun();
console.log("E");
await promise;
console.log("F");
