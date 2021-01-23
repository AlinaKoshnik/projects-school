
//Завдання 1.

let dayWeek = prompt("Введите день недели от 1-7 цифрой", "");
function weekFn(dayWeek) {
    switch (+dayWeek) {
        case 1:
            alert("Понедельник");
            break;
        case 2:
            alert("Вторник");
            break;
        case 3:
            alert("Среда");
            break;
        case 4:
            alert("Чертверг");
            break;
        case 5:
            alert("Пятница");
            break;
        case 6:
            alert("Суббота");
            break;
        case 7:
            alert("Воскресенье");
            break;
        default:
            alert('Введите день недели от 1-7 цифрой');
    }
}

weekFn(dayWeek);

 
//Завдання 2.

let prise = prompt("Введите цену товара", "");
let num = prompt("Введите количество товара", "");

function sum(prise,num) {
    let bigPrise = +prise * +num;
    return bigPrise;
};

console.log(sum(prise,num)) 

// Завдання 3.Функція яка повертає більше з двох чисел.

let a = prompt("Число 1" , "");
let b = prompt("Число 2" , "");

function max(a, b) {
    return Math.max(a,b);
}
//     if (a > b) {
//       return a;
//     } else {
//       return b;
//     }
//   }

console.log(max(a, b)) 