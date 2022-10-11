/**
 * Создать форму динамически при помощи JavaScript.
 *
 * В html находится пример формы которая должна быть сгенерирована.
 *
 * Для того что бы увидеть результат откройте index.html файл в браузере.
 *
 * Обязательно!
 * 1. Для генерации элементов обязательно использовать метод document.createElement
 * 2. Для установки атрибутов элементам обязательно необходимо использовать document.setAttribute
 * 3. Всем созданным элементам необходимо добавить классы как в разметке
 * 4. После того как динамическая разметка будет готова необходимо удалить код в HTML который находится между комментариями
 */

// РЕШЕНИЕ

// CREATE

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

// ------------------------------------------------------------------- //

div2.setAttribute("class", "form-group");
label2.setAttribute("for", "password");

input2.setAttribute("type", "password");
input2.setAttribute("class", "form-control");
input2.setAttribute("id", "password");
input2.setAttribute("placeholder", "Введите пароль");

// ------------------------------------------------------------------- //

div3.setAttribute("class", "form-group form-check");
label3.setAttribute("class", "form-check-label");
label3.setAttribute("for", "exampleCheck1");

input3.setAttribute("type", "checkbox");
input3.setAttribute("class", "form-check-input");
input3.setAttribute("id", "exampleCheck1");

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

console.dir(form);
