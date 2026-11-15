function normalFunction(userName: string) {
  console.log(`Hello ${userName} from normal function`);
}

normalFunction("Babu");

const arrowFunction = (userName: string) => {
  console.log(`Hello ${userName} from arrow function`);
};

arrowFunction("Babu");
