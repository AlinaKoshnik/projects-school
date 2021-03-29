// Задача -1

// let user = {
//     name: "Alina",
//     surname: "Mikosha",
//     age: "18",
//     tel: "093444444",
//     skills: {
//         html:"5",
//         css:"10",
//         js:"9",
//     }
// };

// for(let key in user) {
//     const value = user[key];
//     if(typeof value === 'object') {
//         for(let valueKey in value) {
//             console.log(valueKey + " = " + value [valueKey])    
//         }
//     } else {
//         console.log( key + " = " + value)
//     }
// }

// Задача -2

// for ( let i = 2; i <= 10; i++) {
//     if ( i % 2 == 0) {
//         console.log (i) ;
//     }
// }

// задача -3 

// let expensesNumber = +prompt("Введите количество категорий ваших трат");
// let expenses = {};

// for (let i = 1; i <= expensesNumber; i++) {
//     let expensesKey = prompt("Введите название категории");
//     let expensesValue = +prompt ("Какую сумму Вы потратили?");

//     expenses[expensesKey] = expensesValue;
// }

// console.log(expenses)

// function totalExpenses ( object) {
//     let total = 0;
//     for (let key in object) {
//         total += object[key];
//     }
//     return total;
// }

// let myExpenses = totalExpenses(expenses);

// console.log("ваша сумма трат " + myExpenses)