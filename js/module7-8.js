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
