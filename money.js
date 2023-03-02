let currency = [
  4.71,
  4.45,
  5.35,
  4.72,
];

let EURValue = 4.71;
let USDValue = 4.45;
let GBPValue = 5.35;
let CHFValue = 4.72;

function printValue(plnValue, dupa) {
  console.log(plnValue + " zł to Wartość w Euro to: " +
  plnValue / dupa + " EUR");
}

console.log("Przelicz złotówki na inne waluty");
console.log("1. Euro  2. Dolar  3. Funt  4. Frank Szwajcarski");
let exchange = parseInt(prompt("Wybierz walutę"));

console.log(" Podaj kwotę w złotówkach: ");
let PLNValue = parseInt(prompt("Podaj kwotę w złotówkach: "));

printValue(PLNValue, currency[exchange - 1]);
