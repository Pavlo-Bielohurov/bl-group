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
