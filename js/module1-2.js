//TODO: № 1 на if...else ===============================================
// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

// const a = 10;
// if (a === 10) {
//   console.log("вірно");
// } else {
//   console.log("Невірно");
// }
//TODO: № 2 на тернарник =============================================
// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно' через тернарник

// const a = 0;
// console.log(a === 10 ? "вірно" : "Невірно");

//TODO: № 3 на if...else if ===============================================
// У змінній min лежить число від 0 до 59. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту).

// const min = -1;
// if (min >= 0 && min <= 15) {
//   console.log("Перша чверть");
// } else if (min > 15 && min <= 30) {
//   console.log("Друга чверть");
// } else if (min > 30 && min <= 45) {
//   console.log("Третя чверть");
// } else if (min > 45 && min <= 59) {
//   console.log("Четверта чверть");
// } else {
//   console.log("Ти не втому всесвіті");
// }

//TODO: № 4 на switch ===========================================
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = 3;
// let result;
// switch (num) {
//   case 1:
//     result = "зима";
//     break;
//   case 2:
//     result = "весна";
//     break;
//   case 3:
//     result = "літо";
//     break;
//   case 4:
//     result = "осінь";
//     break;
//   default:
//     result = "введіть адекватну цифру";
// }
// // console.log(result);
// console.log("🚀 ~ result:", result);
//TODO: № 5 на while ===================================================
// скористаємося циклом while та виведіть у консоль числа від 0 до 50
// let iterator = 0;
// while (iterator <= 50) {
//   console.log(iterator);
//   iterator += 1;
// }

//TODO: № 6 на for ===================================
//За допомогою циклу for додайте всі парні числа від min до max
// const min = 0;
// const max = 6;
// let total = 0;
// for (let i = min; i < max; i += 1) {
//   //   if (i % 2 === 0) {
//   //     total += i;
//   //   }

//   if (i % 2 !== 0) {
//     console.log(i);
//     continue;
//   }
//   total += i;
// }

// console.log("🚀 ~ total:", total);
// TODO: № 7 на for =====================================================
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max
// const min = 0;
// const max = 10;
// let result = 0;
// for (let i = max; i >= min; i -= 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
//   result += i;
// }
// console.log(result);

//TODO: № 8  =========================================================
// Напишіть if..else, що відповідає наступному switch:
// const browser = "Opera"
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;
//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;
//   default:
//     alert( 'We hope that this page looks ok!' );
// }

// const browser = "sd";
// if (
//   browser === "Opera" ||
//   browser === "Chrome" ||
//   browser === "Safari" ||
//   browser === "Firefox"
// ) {
//   alert("Okay we suport these browsers too");
// } else if (browser === "Edge") {
//   alert("You've got the Edge!");
// } else {
//   alert("We hope that this page looks ok!");
// }

// console.log(browser);
