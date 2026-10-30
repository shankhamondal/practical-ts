let Discountrate = 20;
let Productdata = [
  {
    Name: "Laptop",
    price: 30000,
  },
  {
    Name: "Headphone",
    price: 2500,
  },
  {
    Name: "Speaker",
    price: 1500,
  },
];
const DiscountCalculator = (
  discount: number,
  Productname: string,
  Productprice: number,
) => {
  let Discountprice = (Productprice * discount) / 100;
  console.log(
    `${Productname}: ${Productprice}/- (Discount:-${Discountprice}/-) = ${Productprice - Discountprice}/-`,
  );
};

console.log(`Flat Discount Rate:${Discountrate}% `);

Productdata.map(({ Name, price }) =>
  DiscountCalculator(Discountrate, Name, price),
);
