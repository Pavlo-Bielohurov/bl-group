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
