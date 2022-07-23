// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let h1 = 'hello';
console.log(h1);
alert(h1);
document.write(h1);

let h2 = 'owu';
console.log(h2);
alert(h2);
document.write(h2);

let h3 = 'com';
console.log(h3);
alert(h3);
document.write(h3);

let h4 = 'ua';
console.log(h4);
alert(h4);
document.write(h4);

let number1 = 1;
console.log(number1);
alert(number1);
document.write(number1);

let number2 = 10;
console.log(number2);
alert(number2);
document.write(number2);

let number3 = -999;
console.log(number3);
alert(number3);
document.write(number3);

let number4 = 123;
console.log(number4);
alert(number4);
document.write(number4);

let number5 = 3.14;
console.log(number5);
alert(number5);
document.write(number5);

let number6 = 2.7;
console.log(number6);
alert(number6);
document.write(number6);

let number7 = 16;
console.log(number7);
alert(number7);
document.write(number7);

let booleanyes = true;
console.log(booleanyes);
alert(booleanyes);
document.write(booleanyes);

let booleanno = false;
console.log(booleanno);
alert(booleanno);
document.write(booleanno);

//Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstname = 'Marian';
let middlename = 'Igorovich';
let lastname = 'Pertak';
let str = ' ';
let person=firstname+str+middlename+str+lastname
console.log(person);

//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = '100'; let c = true
let a = 100;
console.log(typeof a);

let b = '100';
console.log(typeof b);

let c = true;
console.log(typeof c);

//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let myname = prompt('Name');
console.log(myname);
let mymiddlename = prompt('Middlename');
console.log(mymiddlename);
let myage = prompt('Age');
console.log(myage);
