let name = prompt("Ваше имя?", "");
   alert(name);

let num = prompt("Введите число");
alert(num*num);

const year = 12;
const rate = 0.2;
let value = prompt("Сума депозиту");
let term = prompt("Строк дії депозиту (місяці)");
let userName = prompt("Ваше iм'я?", "");

let benafit = value * rate * (term / year);
alert( `Шановний ${userName}, Ви внесли ${value} грн., під 20% річних, на термін ${term} місяців. За цей період часу Ви заробите ${benafit} грн.`);

// let num1 = prompt("Введите число");
// let num2 = prompt("Введите число");

// alert(`Результат:\nСумма- ${num1+num2}\nУмножение- ${num1*num2}\nДеление- ${num1/num2}\nВычитание- ${num1-num2}`);