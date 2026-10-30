function normalFunction(username: string) {
  console.log(`Hello ${username} from normal function`);
}
normalFunction("Babu");

const async = (username: string) => {
  console.log(`Hello ${username} from arrow function`);
};
async("Shankha Mondal");
