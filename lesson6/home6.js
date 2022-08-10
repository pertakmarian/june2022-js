// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 ='hello world'
let str2 ='lorem ipsum'
let str3='javascript is cool'
console.log(str1.length)
console.log(str2.length)
console.log(str3.length)
// - Перевести до великого регістру наступні стрінгові значення
'hello world', 'lorem ipsum', 'javascript is cool'
console.log( str1.toUpperCase())
console.log(str2.toUpperCase())
console.log(str3.toUpperCase())
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL
console.log(str1.toLowerCase())
console.log(str2.toLowerCase())
console.log(str3.toLowerCase())
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// console.log(str.trim())
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні';
// function stringToarray(str){
//     console.log(str.split (' '))
// }
// stringToarray(str)
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let nums =[10,8,-7,55,987,-1011,0,1050,0]
// let array =(value)=>{
//     return nums.toString()
// }
// console.log(array(nums))

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let arraynums = [11,21,3]
// function sorNums (array ,direction){
//     if ( direction ==='+'){
//         array.sort((num1,num2)=> num1-num2)
//     }
//     else if (direction ==='-'){
//         array.sort((num1,num2)=>num2-num1)
//     }
//     return array
// }
// console.log(sorNums(arraynums,'-'))

//
// - є масив
// -- відсортувати його за спаданням за monthDuration
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let sort =coursesAndDurationArray.sort((a,b)=>{
//     return b.monthDuration-a.monthDuration
//     })
// console.log(sort)
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let  filter =coursesAndDurationArray.filter(value => value.monthDuration>5)
// console.log(filter)
// описати колоду карт

// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
let cards = [
    {cardSuit: 'clubs', value: '6', color:'black'},
    {cardSuit: 'clubs', value: '7', color:'black'},
    {cardSuit: 'clubs', value: '8', color:'black'},
    {cardSuit: 'clubs', value: '9', color:'black'},
    {cardSuit: 'clubs', value: '10', color:'black'},
    {cardSuit: 'clubs', value: 'Jack', color:'black'},
    {cardSuit: 'clubs', value: 'Queen', color:'black'},
    {cardSuit: 'clubs', value: 'King', color:'black'},
    {cardSuit: 'clubs', value: 'Ace', color:'black'},

    {cardSuit: 'diamonds', value: '6', color:'red'},
    {cardSuit: 'diamonds', value: '7', color:'red'},
    {cardSuit: 'diamonds', value: '8', color:'red'},
    {cardSuit: 'diamonds', value: '9', color:'red'},
    {cardSuit: 'diamonds', value: '10', color:'red'},
    {cardSuit: 'diamonds', value: 'Jack', color:'red'},
    {cardSuit: 'diamonds', value: 'Queen', color:'red'},
    {cardSuit: 'diamonds', value: 'King', color:'red'},
    {cardSuit: 'diamonds', value: 'Ace', color:'red'},

    {cardSuit: 'hearts', value: '6', color:'red'},
    {cardSuit: 'hearts', value: '7', color:'red'},
    {cardSuit: 'hearts', value: '8', color:'red'},
    {cardSuit: 'hearts', value: '9', color:'red'},
    {cardSuit: 'hearts', value: '10', color:'red'},
    {cardSuit: 'hearts', value: 'Jack', color:'red'},
    {cardSuit: 'hearts', value: 'Queen', color:'red'},
    {cardSuit: 'hearts', value: 'King', color:'red'},
    {cardSuit: 'hearts', value: 'Ace', color:'red'},
    {value: 'Joker', color:'red'},

    {cardSuit: 'spades', value: '6', color:'black'},
    {cardSuit: 'spades', value: '7', color:'black'},
    {cardSuit: 'spades', value: '8', color:'black'},
    {cardSuit: 'spades', value: '9', color:'black'},
    {cardSuit: 'spades', value: '10', color:'black'},
    {cardSuit: 'spades', value: 'Jack', color:'black'},
    {cardSuit: 'spades', value: 'Queen', color:'black'},
    {cardSuit: 'spades', value: 'King', color:'black'},
    {cardSuit: 'spades', value: 'Ace', color:'black'},
    {value: 'Joker', color:'black'},
]
// знайти піковий туз
 let filter =cards.filter(card=>card.cardSuit==='spades'&& card.value==='Ace')
console.log(filter)
let filterCardSix=cards.filter(card=>card.value==='6');
console.log(filterCardSix);
//- всі червоні карти
let filterCardRed=cards.filter(card=>card.color==='red');
console.log(filterCardRed);
//- всі буби
let filterCardClubs=cards.filter(card=>card.cardSuit==='clubs');
console.log(filterCardClubs);
//- всі трефи від 9 та більше
//??????????????????????????????
let filterCardTref=cards.filter( card => card.cardSuit==='clubs'&& card.value>9+'' );
console.log(filterCardTref);