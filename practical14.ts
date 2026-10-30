let tableGenerator = (number: number, length: number) => {
  for (let tableindex = 1; tableindex <= length; tableindex++) {
    console.log(`${number} X ${tableindex} = ${number * tableindex}`);
  }
};

tableGenerator(2, 10);
