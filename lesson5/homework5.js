//
//
//


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let res =(a,b) => a*b
// console.log(res(10,10))

// function res (a,b){
//     let result=a*b
//     return result
//
// }
// console.log(res(10 ,10))
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function colo (r){
//     let radius =r **2
//     let res=r* 3.14
//     return res
//
// }
// console.log(colo(10))
//- створити функцію яка приймає масив та виводить кожен його елемент
//  let array =['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// function  masarrya(array){
//     for (let i = 0; i < array.length; i++) {
// document.write(array[i])
//     }
// }
// masarrya(array)
//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function p (text){
// document.write(`<p>${text}</p>`
// )
// }
// p('hello')
// p('okten')
// p('2022')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function ul (text){
//     document.write(`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>`)
// }
// ul('hello')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function ul(text, number) {
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`)
//
//     }
//     document.write(`</ul>`)
// }
//
// ul('hello', 10)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array =['hello',12,true,false,'number',1]
// function masarray(array){
//     for (let i = 0; i < array[i].length; i++) {
//
//     document.write('<ul>')
//     document.write(`<li>${array}</li>`)
//         document.write(`</ul>`)
//
//     }
//
// }
// masarray(array)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let users = [
//     {name: 'vasya', age: 31, id: 1},
//     {name: 'petya', age: 30, id: 2},
//     {name: 'kolya', age: 29, id: 3},
//     {name: 'olya', age: 28, id: 4},
//     {name: 'max', age: 30, id: 5},
//     {name: 'anya', age: 31, id: 6},
//     {name: 'oleg', age: 28, id: 7},
//     {name: 'andrey', age: 29, id: 8},
//     {name: 'masha', age: 30, id: 9},
//     {name: 'olya', age: 31, id: 10},
//     {name: 'max', age: 31, id: 11}
// ];
//
// function masarray(array) {
//     for (const arrayElement of array) {
//         document.write(`<div>name-${arrayElement.name}</div>
//                         <div>age-${arrayElement.age}</div>
//                         <div>id-${arrayElement.id}</div>`)
//     }
// }
//
// masarray(users)
//
//
// - створити функцію яка повертає найменьше число з масиву
//let mas = [2,3,4,5,6,10,4,3,6];
// let minnumber=(array) =>{
//     let min=array[0]
//     for (let Element of array) {
//         if (min>Element){
//               min=Element
//         }
//
//     }
//     return min
// }
// console.log(minnumber(mas))
//










