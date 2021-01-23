// let age = prompt("Ваш возраст?", "");
// let answer = '';

// if (age > 45) {
//     answer = 'Вы не подходите';
// } else  if (age < 18) {
//     answer = 'Вы не подходите';
// } else  {
//     answer = 'Вы подходите';
// } 

// alert(answer);

// let num = prompt("Введите число от 0 до 59", [59]);
// let message;

//  if (num > 59) {
//     message  = "Введите число от 0 до 59";
// } else if (num <= 15){
//     message = "1 четверть часа";
// } else if (num <= 30){
//     message = "2 четверть часа";
// } else if (num <= 45){
//     message = "3 четверть часа";
// } else if (num <= 59){
//     message = "4 четверть часа";
// } else {
//     message = "Введите число от 0 до 59";
// }

// alert(message);


let a = prompt("Введите число от 0-20", "");
let b = prompt("Введите число от 0-20", "");

if (( a < 12 && a > 3 ) && ( b >= 5 && b < 13 )){
    alert ('true');
} else {
    alert ("false");
} 






// const year = 12;
// let rate;
// let value = prompt("Сума депозиту");
// let term = prompt("Строк дії депозиту (місяці)");
// let userName = prompt("Ваше iм'я?", "");

// if (term <=6){
//     rate =0.15;
// } else if (term >6 && term <9) {
//     rate = 0.16;
// } else if (term >=9 && term <=12) {
//     rate = 0.17;
// } else {
//     console.log ("false")
// }

// let benafit = value * rate * (term / year);
// alert( `Шановний ${userName}, Ви внесли ${value} грн., під ${rate} річних, на термін ${term} місяців. За цей період часу Ви заробите ${benafit} грн.`);