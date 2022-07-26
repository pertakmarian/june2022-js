//Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let mas = [12, 'hello', 'okten', 3023, false, 'car', true, 12, 123.4, 'good']
console.log(mas[0])
console.log(mas[1])
console.log(mas[2])
console.log(mas[3])
console.log(mas[4])
console.log(mas[5])
console.log(mas[6])
console.log(mas[7])
console.log(mas[8])
console.log(mas[9])

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'Harry Potter and the Cursed Child',
    pageCount: 350,
    genre: 'fantasy'

}
let book2 = {
    title: 'Duma key ',
    pageCount: 832,
    genre: 'fantasy'

}
let book3 = {
    title: 'The Outsider ',
    pageCount: 592,
    genre: 'fantasy'

}
//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let book4 = {
    title: 'Harry Potter and the Cursed Child',
    pageCount: 350,
    genre: 'fantasy',
    authors: [{name: 'Joana', age: 55}]

}

let book5 = {
    title: 'Duma key ',
    pageCount: 832,
    genre: 'fantasy',
    authors: [{name: 'Stiven', age: 60}]

}
let book6 = {
    title: 'The Outsider ',
    pageCount: 592,
    genre: 'fantasy',
    authors: [{name: 'Stiven', age: 60}]
}

//Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let array = [
    {
        name: 'marian', username: 'marik', password: '220102'
    },
    {
        name: 'andriy', username: 'endry', password: '62106'
    },
    {
        name: 'tolik', username: 'anatoliy', password: '347522'
    },
    {
        name: 'Yulia', username: 'jylka', password: '12352'
    },
    {
        name: 'sasha', username: 'sanek', password: '34352'
    },
    {
        name: 'vasya', username: 'tankist', password: '89762'
    },
    {
        name: 'vitalik', username: 'mongol', password: '223402'
    },
    {
        name: 'kolya', username: 'sysid', password: '220102'
    },
    {
        name: 'jyra', username: 'yulik', password: '88102'
    },
    {
        name: 'petro', username: 'maklayd', password: '543102'
    }
]
console.log(array[0].password)
console.log(array[1].password)
console.log(array[2].password)
console.log(array[3].password)
console.log(array[4].password)
console.log(array[5].password)
console.log(array[6].password)
console.log(array[7].password)
console.log(array[8].password)
console.log(array[9].password)