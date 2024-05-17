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