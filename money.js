let EURValue = 4.71;
let USDValue = 4.45;
let GBPValue = 5.35;
let CHFValue = 4.72;

console.log("Przelicz złotówki na inne waluty");
console.log("1. Euro  2. Dolar  3. Funt  4. Frank Szwajcarski");
let exchange = prompt("Wybierz walutę");

if (exchange == 1) {
  console.log(" Podaj kwotę w złotówkach: ");
  let PLNValue = parseInt(prompt("Podaj kwotę w złotówkach: "));

  console.log(" Wartość w Euro to: " + PLNValue / EURValue + " EUR");
}

if (exchange == 2) {
  console.log(" Podaj kwotę w złotówkach: ");
  let PLNValue = parseInt(prompt("Podaj kwotę w złotówkach: "));

  console.log(" Wartość w USD to: " + PLNValue / USDValue + " USD");
}

if (exchange == 3) {
  console.log(" Podaj kwotę w złotówkach: ");
  let PLNValue = parseInt(prompt("Podaj kwotę w złotówkach: "));

  console.log(" Wartość w GBP to: " + PLNValue / GBPValue + " GBP");
}

if (exchange == 4) {
  console.log(" Podaj kwotę w złotówkach: ");
  let PLNValue = parseInt(prompt("Podaj kwotę w złotówkach: "));

  console.log(" Wartość w CHF to: " + PLNValue / CHFValue + " CHF");
}
