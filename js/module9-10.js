// TODO: ЗАДАЧА 1  на LocalStorage =========================================
// Зробити перемикач теми. Зберігати тему у локальному сховище.
// При перезавантаженні сторінки перевіряти сховище та ставити тему, яка там вказана.
// Додати класи для змін тем

const refs = {
  body: document.querySelector("body"),
  checkBox: document.querySelector(".checkbox"),
};

const LS_KEY = "ls-key";
const light = "light-theme";
const dark = "dark-theme";
const saveTheme = localStorage.getItem(LS_KEY);

switch (saveTheme) {
  case light:
    refs.body.classList.add("light");
    refs.checkBox.checked = false;
    break;

  case dark:
    refs.body.classList.add("dark");
    refs.checkBox.checked = true;
    break;

  default:
    refs.body.classList.add("light");
    refs.checkBox.checked = false;
    break;
}

refs.checkBox.addEventListener("click", changeTheme);

function changeTheme() {
  if (refs.checkBox.checked === false) {
    localStorage.setItem(LS_KEY, light);
    refs.body.classList.add("light");
    refs.body.classList.remove("dark");
  }

  if (refs.checkBox.checked === true) {
    localStorage.setItem(LS_KEY, dark);
    refs.body.classList.add("dark");
    refs.body.classList.remove("light");
  }
  console.log(refs.checkBox.checked);
}

// TODO: ЗАДАЧА 2 на interval со старой домашки  ====================================
// Напиши скрипт, який після натискання кнопки «Start», раз на секунду
//  змінює колір фону < body > на випадкове значення, використовуючи інлайн стиль.
// Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startBtn = document.querySelector(".btn-start");
const stopBtn = document.querySelector(".btn-stop");
const elementBody = document.querySelector("body");

let intervalId = null;

function changeBackgroundColor() {
  elementBody.style.backgroundColor = getRandomHexColor();
}
stopBtn.disabled = false;

startBtn.addEventListener("click", () => {
  startBtn.disabled = true;
  stopBtn.disabled = false;

  intervalId = setInterval(changeBackgroundColor, 1000);
});
stopBtn.addEventListener("click", () => {
  stopBtn.disabled = true;
  startBtn.disabled = false;

  if (intervalId === null) {
    return;
  }

  clearInterval(intervalId);
});

// TODO: ЗАДАЧА 3 на обіцянки (Promise) ====================================
// Перероби функцію на проміс таким чином, щоб проміс повертав значення
// через 2 секунди після виклику функції

function greet() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Hello world");
    }, 2000);
  });
}
greet().then((value) => {
  console.log(value);
});

// TODO: ЗАДАЧА 4 на LocalStorage =========================================
// Створи перелік справ.
// Є інпут, який вводиться назва завдання.
// Після натискання на кнопку "Додати" завдання додається до списку #list.
// Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
// Забрати завдання зі списку.
// Список із завданнями має бути доступним після перезавантаження сторінки.

const form = document.querySelector("#task-form");
const input = document.querySelector('input[name="taskName"]');
const list = document.querySelector("#task-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

form.addEventListener("submit", addTask);

function addTask(event) {
  event.preventDefault();
  const task = input.value.trim();

  if (task !== "") {
    tasks.push(task);
    input.value = "";
    saveTask();
    renderTask();
  }
}

function saveTask() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTask() {
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    const btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.dataset.index = index;
    btn.addEventListener("click", deleteTask);
    li.appendChild(btn);
    list.appendChild(li);
  });
}

function deleteTask(event) {
  const taskId = event.target.dataset.index;
  tasks.splice(taskId, 1);
  renderTask();
  saveTask();
}

renderTask();
