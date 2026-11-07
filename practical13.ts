function normalFunction(userName: string) {
  console.log(`Hello ${userName} from normal function`);
}

normalFunction("Babu");

const async = (userName: string) => {
  console.log(`Hello ${userName} from arrow function`);
};

async("Babu");
