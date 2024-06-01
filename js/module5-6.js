//TODO: № 1 на this ✅ ==============================================
//Виправте помилки, щоб код працював

// const price = 4000;
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };
// product.showPrice();

//TODO: № 2 на this ✅==============================================
//Виправте помилки, щоб код працював

// function callAction(action) {
//   action();
//   return action;
// }
// const item = {
//   quantity: 5,
//   getQuatity() {
//     console.log(this.quantity);
//   },
// };
// callAction(item.getQuatity.bind(item));
// callAction(item.getQuatity());

//TODO якщо що на замикання ✅ ==============================================
// Напишіть функцію makeShef(shefName), яка повертає функцію
// makeDish(dish), яка памятає імя щефа піл час її виклику
// Функція  makeDish має логіровать рядок "<імя шефа> is cooking <dish>"

// function makeShef(shefName) {
//   return function makeDish(dish) {
//     console.log(`${shefName} is cooking ${dish}`);
//   };
// }
// const cooking = makeShef("Robert");
// cooking("seledka w shubi, a ja she ne");

// const chill = makeShef("Artur");
// chill("kartopla z salem");

// cooking("Oliwe i cholodec");

//TODO № 3 з колбеком =====================================
//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

// function letMeSeeYourName(callback) {
//   const name = prompt("Як тебе звати ?");
//   if (!name) {
//     alert("Введіть ім'я");
//     return;
//   }
//   return callback(name);
// }

// const greet = (name) => {
//   alert(`Привіт ${name}`);
// };

// letMeSeeYourName(greet);

//TODO № 4 з колбеком ==============================================
//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль

// function makeProduct(name, price, callback) {
//   const product = {
//     name,
//     price,
//     id: Math.random(),
//   };
//   return callback(product);
// }

// // const showProduct = (product) => product;

// function showProduct(product) {
//   return product;
// }

// console.log(makeProduct("Чіпсики", 40, showProduct));
// console.log(makeProduct("Кебаб", 200, showProduct));

//TODO: № 5 на перебирання ✅ ==============================================
//Зібрати в allTopics масив всіх предметів всіх курсів
//Виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи

// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Function",
//       "Git",
//       "Conditions",
//       "Classes",
//       "GitHub",
//       "DOM",
//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Git",
//       "Promises",
//       "AJAX",
//       "GitHub",
//     ],
//   },
// ];
// const allTopics = courses.flatMap((course) => course.topics).filter((item, index, array) => array.indexOf(item) === index);
// console.log("🚀 ~ allTopics:", allTopics)

//TODO: № 6 на class ✅ ==============================
//  Написати клас, який буде представляти зоопарк тварин.
//  Створити загальний клас Animal для тварин.
// У зоопарку повинні бути різні типи тварин, такі як ссавці, птахи, рептилії тощо.
// Кожен тип тварин повинен мати свої властивості та методи, наприклад,
//  методи для отримання інформації про тварину та для годівлі тварин.
//  Крім того, зоопарк повинен мати метод для додавання тварин до списку та
// метод для виведення списку всіх тварин у зоопарку.

// class Animal {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }

//   getInfo() {
//     return `name:${this.name}, type:${this.type}`;
//   }

//   feed() {
//     return `${this.name} shos kushaje`;
//   }
// }

// class Mammal extends Animal {
//   constructor(name, type, eat) {
//     super(name, type);
//     this.eat = eat;
//   }

//   getInfo() {
//     return `${super.getInfo()}, eat: ${this.eat} `;
//   }

//   feed() {
//     return `${this.name} est takue-to edu(${this.eat})`;
//   }
// }

// class Bird extends Animal {
//   constructor(name, type, fly) {
//     super(name, type);
//     this.fly = fly;
//   }

//   getInfo() {
//     return `${super.getInfo()}, fly: ${this.fly} `;
//   }

//   fly() {
//     return `${this.name} na stokato ${this.fly}m  letaet, bez dozaratki`;
//   }
// }

// class Zoo {
//   constructor() {
//     this.animals = [];
//   }

//   addAnimal(animal) {
//     return this.animals.push(animal);
//   }

//   infoAnimals() {
//     console.log("Zoo info animals");

//     return this.animals.map((animal) => console.log(animal.getInfo()));
//   }
// }

// const zoo = new Zoo();

// const lion = new Mammal("Simba-bimba", "lion", "meat");
// zoo.addAnimal(lion);

// const papuga = new Bird("Kesha", "bird", 20000);
// zoo.addAnimal(papuga);

// zoo.infoAnimals();


