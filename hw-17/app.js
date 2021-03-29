// // Задача -3

// let expensesNumber = +prompt("Введите количество категорий ваших трат");
// let expenses = {};

// for (let i = 1; i <= expensesNumber; i++) {
//     let expensesKey = prompt("Введите название категории");
//     let expensesValue = +prompt ("Какую сумму Вы потратили?");


//     if(expensesKey != null && expensesKey != "" && expensesValue != null && 
//     expensesValue != ""){
//         console.log ("ok")
//         expenses[expensesKey] = expensesValue;
//     } else {
//         console.log ("error")
//         i--;
//     }
    
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

// задача -1
//  let arrNum = [1,5,3,5,7,4,3,2,6,7]
//  let sum = 0;

//  for(let i = 0; i < arrNum.length; i++){
//      sum = arrNum[i] + sum;
//  }

//  console.log(sum)

// задача-2

//  let arrNum = [1,5,3,5,7,4,3,2,6,7]
//  let max = arrNum[0];

//  for(let i = 0; i < arrNum.length; i++){
//      if(arrNum[i] > max) {
//         max = arrNum[i]
//      }
//  }

//  console.log(max)