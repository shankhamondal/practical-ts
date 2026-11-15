function normalFunction(userName: string) {
  console.log(`Hello ${userName} from normal function`);
}

normalFunction("Babu");

const arrowFun = (userName: string) => {
  console.log(`Hello ${userName} from arrow function`);
};

arrowFun("Babu");
