console.log("Start");

let count = 0;
let intervalId = setInterval(() => {
  console.log("Count:", ++count);
}, 1000);

const startTime = Date.now();

const wait = () => {
  if (Date.now() - startTime < 5500) {
    setTimeout(wait, 0);
    return;
  }
  clearInterval(intervalId);
  console.log("End");
};

wait();
