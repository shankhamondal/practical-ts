let Discount = 10;
let Laptop = 70000;
let headphone = 2500;
let speaker = 1500;

console.log(`Flat Discount Rate: ${Discount}%`);
console.log(
  `Laptop: ${Laptop}/- (Discount: ${(Laptop * Discount) / 100}/-) = ${Laptop - (Laptop * Discount) / 100}`,
);
console.log(
  `HeadPhone: ${headphone}/- (Discount: ${(headphone * Discount) / 100}/-) = ${headphone - (headphone * Discount) / 100}`,
);
console.log(
  `Speaker: ${speaker}/- (Discount: ${(speaker * Discount) / 100}/-) = ${speaker - (speaker * Discount) / 100}`,
);
