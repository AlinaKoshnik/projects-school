// function bark(name,weight) {
//     if(weight>=20) {
//         alert(`${name} says WOOF WOOF`);
//     } else {
//         alert(`${name} says woof woof`);
//     }
// }

// bark("Jack", 25);
// bark("Kiki", 5);

// let month = prompt("Ведите название месяца", "");

// if (month == 'январь' || month == 'декабрь' || month == 'февраль' ) {
//     alert ("Сейчас Зима")
// } else if (month == 'март' || month == 'апрель' || month == 'май' ) {
//     alert ("Сейчас Весна")
// } else if (month == 'июнь' || month == 'июль' || month == 'август' ) {
//     alert ("Сейчас Лето")
// } else if (month == 'сентябрь' || month == 'октябрь' || month == 'ноябрь' ) {
//     alert ("Сейчас Осень")
// } else {
//     alert ("этого месяца не существует")
// } ;

// let dogName = prompt ("Enter dog name?", "");
// let dogWeight =  prompt ("Enter dog weight?", "");

// if (dogWeight>=20) {
//     alert(`${dogName says WOOF WOOF}`)
// } else {
//     alert(`${dogName sa}`)
// }

// let discount = 20;
// let currency = "грн";
// let productPrice = prompt("Введите стоимость товара");

// function calcDiscount() {
//     let productPriceWithDiscount = productPrice - (productPrice * discount/100);
//     console.log  (`Стоимость ${productPrice++} товара со скидкой` +  productPriceWithDiscount + currency);
// }


// calcDiscount()
// calcDiscount()
// calcDiscount()

// function ask(question,success,error) {
//     if(confirm(question)) {
//         return success()
//     } else {
//         return error()
//     }
// }

// function showSuccess() {
//     alert("Ура вы согласны");
// }

// function showCancel () {
//     alert("Жаль вы не согласны");
// }

// ask ("Вы согласны?" , showSuccess, showCancel);


function sum(a,b) {
    return a + b
}
const sum1 = (a,b) => {
    let c = a+b;
    return c;
};

console.log(sum(3,5))
console.log(sum1(5,5))


// let firtstName = "Alina";
// let fullName = "Mikosha";
// let age = 18;
// let tel = 093444444;

// let user = {
//     name: "Alina";
//     name: "Mikosha";
//     age: "18";
//     tel: "093444444";
// }; 

// console. log(user.name);
// console. log(user["age"]);


