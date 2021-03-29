// let user =[
//     {
//         name:"Jack",
//         age:20,
//     },
//     {
//         name:"Joon",
//         age:24,
//     },
//     {
//         name:"Anna",
//         age:20,
//     },
//     {
//         name:"Nik",
//         age:20,
//     },
// ]

// let sumAge = user.reduce((sum,item) => (
//     sum + item.age
// ),0)

// console.log(sumAge)

// задача -1 

// let num = prompt('Введите числа через запятую');
// let arr = num.split(","); 

// let topNum = prompt("Какое число нужно найти?");

// console.log(arr.includes(topNum));


// задача -2 

// let rangeNumbers = (a,b) => {
//     if(b > a) {
//         let arr = [];
//         for(let i = a; i < b; i++) {
//             if(i % 2 === 1){
//                 arr.push(i)
//             }
//         } 
//         return arr
//     }
//     return false
// }


// const res = rangeNumbers(1,5);

// задача -3

// let num = prompt('Введите числа через запятую');
// let arr = num.split(","); 

// arr.sort((a,b) => a-b);

// console.log(arr)

// задача -4 

let randomNum = (math.round(math.random() * 100))
    // if(randomNum % 2 === 0){
    //     console.log("Число парное")
    // } else {
    //     console.log("Число не парное");
    //     }

console.log(randomNum)