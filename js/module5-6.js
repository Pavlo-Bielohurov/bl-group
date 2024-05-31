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
