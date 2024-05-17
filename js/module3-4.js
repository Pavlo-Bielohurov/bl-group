//TODO: № 1  ============================================================
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [2, 5, 35, 56, 12, 1, 7, 80, 3];
// function findSmallerNumber(numbers) {
//     if (!Array.isArray(numbers)) {
//         return "Шо за фігня?";
//     }
//     let min = numbers[0];

//     for (const number of numbers) {
//         if (min > number) {
//             min = number;
//         }
//     }
//     return min;
// }

// console.log(findSmallerNumber(numbers));
// console.log(findSmallerNumber(1));

//TODO: № 2 =============================================================
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// function caclculateAverage(...args) {
//   //   const args = arguments;//Псевдомасив
//   //   return args;

//   let total = 0;
//   let count = 0;
//   for (const arg of args) {
//     if (typeof arg !== "number") {
//       continue;
//     }
//     total += arg;
//     count += 1;
//   }
//   return total / count;
// }
// console.log(caclculateAverage(true, 1, 1, 2, 20, "Hello"));
//TODO: № 4 ==============================================================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// function totalArr(array) {
//     const result = [];
//     for (let i = 0; i < array.length -1; i+=1) {
//         result.push(array[i] + array[i+1]);

//     }
//     return result;
// }
// console.log(totalArr(someArr));

//TODO: № 7 ==============================================================
// В нас є объект, в якому зберігаються зарплатні
// нашої команди
// Напишіть код для підсумовання всіх зарплат і
// Збережіть його результат в перемінну sum.
// Якщо объект salaries пустий, тоді результат має бути 0
// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// let totalSalaries = 0;
// const salari = Object.values(salaries);
// for (const sala of salari) {
//   totalSalaries += sala;
// }
// // for (const sala of Object.values(salaries)) {
// //   totalSalaries += sala;
// // } // Bez zminoy

// console.log(totalSalaries);

//TODO: № 8 ================================================================
// Потрібно написати функцію, яка приймає 2 параметри key та obj,
// яка буде перебирати об'єкт
// Якщо у об'єкта є такий ключ - поверне true
// const obj = {
//   name: "Igor",
//   car: "Mercedes",
//   carColor: "black",
// };
// function getBool(key, obj) {
//   //   return Object.keys(obj).includes(key);
//   return key in obj; // for in
// }
// console.log(getBool("name", obj));

//TODO: № 9 ==============================================================
// Створіть функцію multiplyNumeric(obj),
// яка множить всі числові властивості об'єкта obj на 2
// треба повертати об'єкт
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function multiplyNumeric(obj) {
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       if (typeof obj[key] !== "number") {
//         continue;
//       }
//       obj[key] *= 2;
//     }
//   }
//   return obj;
// }

// console.log(multiplyNumeric(menu));
