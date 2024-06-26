//TODO: № 1 ==============================================
//Натискання на кнопку "SHOW ME" має виводити значення з поля введення
// (дивіться на елементи в html-розмітці)

// const button = document.querySelector("#alertButton");
// button.addEventListener("click", () => {
//   //   const showInput = document.querySelector("#alertInput").value;
//   const showInput = button.nextElementSibling.value;
//   console.log(showInput);
// });

//TODO: № 2 ==============================================
// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
// const button = document.querySelector("#swapButton");
// const inputOne = document.querySelector("#leftSwapInput");
// const inputTwo = document.querySelector("#rightSwapInput");
// button.addEventListener("click", changeValue);
// function changeValue() {
//   const saveValue = inputOne.value;
//   inputOne.value = inputTwo.value;
//   inputTwo.value = saveValue;
// }
//TODO: № 3 ==============================================
// При кліку на кнопку текст параграфів змінюється на їх порядковий номер

// const paragraphs = document.querySelectorAll("p");
// const btn = document.querySelector("button");

// btn.addEventListener("click", getElement);

// function getElement() {
//   paragraphs.forEach((p, index) => {
//     p.textContent = index + 1;
//   });
// }

//TODO: № 4 ==============================================
// Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.

// const button = document.querySelector("#passwordButton");
// const input = document.querySelector("#passwordInput");

// button.addEventListener("click", handleHide);

// function handleHide() {
//   const typeInput = input.getAttribute("type");
//   const toggleTypeInput = typeInput === "password" ? "text" : "password";
//   input.setAttribute("type", toggleTypeInput);
//   console.log(typeInput);

//   const buttonText = button.textContent;
//   const newText = buttonText === "Приховати" ? "Розкрити" : "Приховати";
//   button.textContent = newText;
//   console.log(buttonText);
// }

//TODO: № 5 ==============================================
// Кнопка "Зменшити" робить квадрат менше на 10 пікселів, кнопка "Збільшити" - більше на 10 пікселів.

// const btnOne = document.querySelector("#decrease");
// const btnTwo = document.querySelector("#increase");
// const divEl = document.querySelector("#box");

// console.dir(divEl);

// btnOne.addEventListener("click", () => {
//   const width = divEl.offsetWidth;
//   const height = divEl.offsetHeight;

//   divEl.style.width = `${width - 10}px`;
//   divEl.style.height = `${height - 10}px`;
// });
// btnTwo.addEventListener("click", () => {
//   const width = divEl.offsetWidth;
//   const height = divEl.offsetHeight;

//   divEl.style.width = `${width + 10}px`;
//   divEl.style.height = `${height + 10}px`;
// });

// Другий варіант

// btnOne.addEventListener("click", changeDivSize);
// btnTwo.addEventListener("click", changeDivSize);

// function changeDivSize(event) {
//   const width = divEl.offsetWidth;
//   const height = divEl.offsetHeight;
//   const currentBtn = event.target.getAttribute("id");
//   console.log(currentBtn);

//   switch (currentBtn) {
//     case "decrease":
//       divEl.style.width = `${width - 10}px`;
//       divEl.style.height = `${height - 10}px`;
//       break;
//     case "increase":
//       divEl.style.width = `${width + 10}px`;
//       divEl.style.height = `${height + 10}px`;
//       break;
//   }
// }
//TODO: № 6 ==============================================
// Додайде слухач кліку і визначте, коли клік відбувається
// всередині елемента з id "place" і коли клік припадає поза зоною елемента
// https://developer.mozilla.org/en-US/docs/Web/API/Node/contains

// const div = document.querySelector("#place");
// window.addEventListener("click", (evt) => {
// console.log(evt.target);
//   const isEl = div.contains(evt.target);
//   if (isEl) {
//     console.log(`Клік відбувся в середині темно зеленого поля`);
//     return;
//   }
//   console.log(`Ви тапнули мимо`);
// });
//TODO: № 7 ==============================================
// Натиснувши кнопку "Подвоювати", збільшити значення
// у кожному елементі списку у 2 рази

// const items = document.querySelector(".list").children;
// const btn = document.querySelector("#double");
// btn.addEventListener("click", doubleNumbers);
// function doubleNumbers() {
//   [...items].map((item) => {
//     item.textContent *= 2;
//   });
// }
