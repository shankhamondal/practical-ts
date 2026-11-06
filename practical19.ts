const tableGenerator = (
  number: number,
  length: number,
  intervalTime: number,
) => {
  let index = 1;
  console.log(`Generating table of number ${number} upto ${length} times.`);
  console.log("------------------------------------");

  const interval = setInterval(() => {
    if (index <= length) {
      console.log(`${number} X ${index} = ${number * index}`);
      index++;
    } else {
      clearInterval(interval);
    }
  }, intervalTime);
};
tableGenerator(3, 10, 1000);
