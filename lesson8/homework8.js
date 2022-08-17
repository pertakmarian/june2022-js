// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surmane, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surmane;
    this.email = email;
    this.phone = phone;

}
let userArr=[
    new User(1,'stepan','giga','asdjfh@gmail.com','067789074'),
    new User(21,'kolya','semenov','fgfdgfh@gmail.com','0639045334'),
    new User(39,'ivan','ivankov','cxzfjfh@gmail.com','0679321234'),
    new User(12,'petro','p9to4kin','mnbjfh@gmail.com','0639765864'),
    new User(5,'oleg','4ust9kov','gfdjfh@gmail.com','0679065334'),
    new User(6,'olga','nanivska','dsajfjfh@gmail.com','0679043234'),
    new User(7,'taras','ilkiv','eejjfjfh@gmail.com','0679010234'),
    new User(32,'akar','akarevi4','gfdsail.com','0679010265434'),
    new User(9,'misha','andrysenko','czzxxh@gmail.com','0679321234'),
    new User(10,'yura','karpinets','dsdssdcxxcl.com','0679010234')

]
console.log(userArr)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filterUser=userArr.filter((item)=>{
    if (item.id %2 ===0)
        return item
})
console.log(filterUser)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortuser= userArr.sort((a,b )=> a.id - b.id)
console.log(sortuser)
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id,name,surname,email,phone,order){
        this.id=id
        this.name=name
        this.surname=surname
        this.email=email
        this.phone=phone
        this.order=order


    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let masArray =[
    new Client(12,'tolik','dosko4','jdjsjs@gmail.com','0639030215',['kola']),
    new Client(21,'kolya','semenov','fgfdgfh@gmail.com','0639045334',['apelsun', 'kola']),
    new Client(39,'ivan','ivankov','cxzfjfh@gmail.com','0679321234',['voda' ,'kola']),
    new Client(12,'petro','p9to4kin','mnbjfh@gmail.com','0639765864',['voda',]),
    new Client(5,'oleg','4ust9kov','gfdjfh@gmail.com','0679065334',['milk','kola']),
    new Client(6,'olga','nanivska','dsajfjfh@gmail.com','0679043234',['voda ','milk','sik']),
    new Client(7,'taras','ilkiv','eejjfjfh@gmail.com','0679010234',['voda', 'kola']),
    new Client(32,'akar','akarevi4','gfdsail.com','0679010265434',['voda ','kola']),
    new Client(9,'misha','andrysenko','czzxxh@gmail.com','0679321234',['voda ','kola']),
    new Client(10,'yura','karpinets','dsdssdcxxcl.com','0679010234',['voda ','chokolad'])
]

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
 let sortClient=masArray.sort((a,b)=>
     a.order.length -b.order.length)
     console.log(sortClient)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
   function Car (model, producer, year, maxSpeed,volume,driver) {
   	this.model = model;
   	this.producer = producer;
   	this.year = year;
   	this.maxSpeed = maxSpeed;
   	this.volume = volume;
       this.driver=driver;
    this.drive = function (){
  		console.log(`Їдемо із швидкістю ${this.maxSpeed} на годину`);
  	};
  	this.info = function () {
  		console.log(`model : ${this.model},producer : ${this.producer},year : ${this.year},maxSpeed : ${this.maxSpeed},
  		volume: ${this.volume}`);
  	};
  	this.increaseMaxSpeed = function (newSpeed){
          this.maxSpeed = newSpeed
          return newSpeed
      };
  	this.changeYear = function (newValue){
          this.year === newValue
          return newValue
      };
    	this.addDriver = function (driver){
            this.addDriver = driver;
            return driver
        }
    }
    let cars = new Car("altima","Nissan",2011, 240, 2.5,)
    console.log(cars);
 cars.drive();
 cars.info();
 console.log(cars.increaseMaxSpeed(280));
 console.log(cars.changeYear(2020))
 let driver = {name:"Nazar Senkov", age : 33};
 console.log(driver);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку