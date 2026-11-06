let startCount = 0;
let endtCount = 10;
let intervalTime = 1000;
console.log(`Counting up from ${startCount} to ${endtCount}`);
console.log("------------------------");

let start = startCount;

const counter = setInterval(() => {
  if (start <= endtCount) {
    console.log(`Count: ${start}`);
    start++;
  } else {
    clearInterval(counter);
  }
}, intervalTime);
