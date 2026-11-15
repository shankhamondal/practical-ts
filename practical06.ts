let Discount: number = 10;
let Laptop: number = 70000;
let headphone: number = 2500;
let speaker: number = 1500;

console.log(`Flat Discount Rate: ${Discount}%`);

console.log(`Laptop: ${Laptop}/- (Discount: ${(Laptop * Discount) / 100}/-)`);

console.log(
  `HeadPhone: ${headphone}/- (Discount: ${(headphone * Discount) / 100}/-)`,
);
console.log(
  `Speaker: ${speaker}/- (Discount: ${(speaker * Discount) / 100}/-)`,
);
