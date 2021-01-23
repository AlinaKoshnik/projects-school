const foo = (a,b,c) => {
    if (c){
        return Math.max(a,b)
    }
    return Math.min(a,b)
};

console.log(foo(4,6,false))

let bdYear = +prompt("Введите год своего рождения", "");
let name = prompt("Введите свое имя");

const calcAge = (year) => {
    return 2021 - year
};

const yearsUntilRetirement = (year,userName) => {
    const age = calcAge(year)
    if(age >= 60) {
        return "Вы уже пенсионер"
    } else {
        const abc = 60 - age;
        return `${userName} вийде на пенсію через ${abc} років `
    } 
}; 

console.log(yearsUntilRetirement(bdYear,name))
