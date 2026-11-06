let userObject = {
  fullname: "Shankha Mondal",
  age: 20,
  gender: "Male",
  phonenumber: "9749025576",
};

let delayTime = 2000;
console.log(`Your details will be shawn in ${delayTime / 1000} seconds.`);
console.log("----------------------------------------");

setTimeout(() => {
  console.log(`Full Name : ${userObject.fullname}`);
  console.log(`Age : ${userObject.age}`);
  console.log(`Gender : ${userObject.gender}`);
  console.log(`Phone Number : ${userObject.phonenumber}`);
}, delayTime);
