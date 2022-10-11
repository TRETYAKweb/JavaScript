/**
 * Доработать форму из 1-го задания.
 *
 * Добавить обработчик сабмита формы.
 *
 * Для того что бы увидеть результат откройте index.html файл в браузере.
 *
 * Обязательно!
 * 1. При сабмите формы страница не должна перезагружаться
 * 2. Генерировать ошибку если пользователь пытается сабмитить форму с пустыми или содержащими только пробел(ы) полями.
 * 3. Если поля формы заполнены и пользователь нажимает кнопку Вход → вывести в консоль объект следующего вида
 * {
 *  email: 'эмейл который ввёл пользователь',
 *  password: 'пароль который ввёл пользователь',
 *  remember: 'true/false'
 * }
 */

// РЕШЕНИЕ

const form = document.getElementById("form");

const div = document.createElement("div");
const label = document.createElement("label");
const input = document.createElement("input");

const div2 = document.createElement("div");
const label2 = document.createElement("label");
const input2 = document.createElement("input");

const div3 = document.createElement("div");
const label3 = document.createElement("label");
const input3 = document.createElement("input");

const btn = document.createElement("button");

// CREATE

// innerHTML
label.innerHTML = "Электропочта";
label2.innerHTML = "Пароль";
label3.innerHTML = "Запомнить меня";
btn.innerHTML = "Вход";
// innerHTML

// Attributes

div.setAttribute("class", "form-group");
label.setAttribute("for", "email");

input.setAttribute("type", "email");
input.setAttribute("class", "form-control");
input.setAttribute("id", "email");
input.setAttribute("placeholder", "Введите свою электропочту");
input.setAttribute("name", "email");

// ------------------------------------------------------------------- //

div2.setAttribute("class", "form-group");
label2.setAttribute("for", "password");

input2.setAttribute("type", "password");
input2.setAttribute("class", "form-control");
input2.setAttribute("id", "password");
input2.setAttribute("placeholder", "Введите пароль");
input2.setAttribute("name", "password");

// ------------------------------------------------------------------- //

div3.setAttribute("class", "form-group form-check");
label3.setAttribute("class", "form-check-label");
label3.setAttribute("for", "exampleCheck1");

input3.setAttribute("type", "checkbox");
input3.setAttribute("class", "form-check-input");
input3.setAttribute("id", "exampleCheck1");
input3.setAttribute("name", "checkbox");

// ------------------------------------------------------------------- //

btn.setAttribute("type", "submit");
btn.setAttribute("class", "btn btn-primary");

// Attributes

// Append

form.append(div, div2, div3, btn);
div.append(label);
div.append(input);

div2.append(label2);
div2.append(input2);

div3.append(input3);
div3.append(label3);

// Append

// const inputEmail = form.querySelector("#email");
// const inputPassword = form.querySelector("#password");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const fromData = new FormData(event.target);

  const email = fromData.get("email").trim();
  const password = fromData.get("password").trim();
  const checkbox = Boolean(fromData.get("checkbox"));

  if (email.length === 0 || password.trim().length === 0) {
    throw new Error("Error");
  }

  console.log(
    `Электропочта: ${email}, Пароль: ${password}, remember: ${checkbox}`
  );

  form.reset();
});

// console.dir(inputEmail);
// console.dir(inputPassword);

// inputEmail.addEventListener("input", (event) => {
//   if (event.target.value.length < 2) {
//     event.target.style.border = "5px solid red";
//     throw new Error(`Error`);
//   } else {
//     event.target.style.border = "";
//   }
// });

// inputPassword.addEventListener("input", (event) => {
//   if (event.target.value.length < 2) {
//     event.target.style.border = "5px solid red";
//     throw new Error(`Error`);
//   } else {
//     event.target.style.border = "";
//   }
// });

/**
 * Доработать форму из 1-го задания.
 *
 * Добавить обработчик сабмита формы.
 *
 * Для того что бы увидеть результат откройте index.html файл в браузере.
 *
 * Обязательно!
 * 1. При сабмите формы страница не должна перезагружаться
 * 2. Генерировать ошибку если пользователь пытается сабмитить форму с пустыми или содержащими только пробел(ы) полями.
 * 3. Если поля формы заполнены и пользователь нажимает кнопку Вход → вывести в консоль объект следующего вида
 * {
 *  email: 'эмейл который ввёл пользователь',
 *  password: 'пароль который ввёл пользователь',
 *  remember: 'true/false'
 * }
 */
