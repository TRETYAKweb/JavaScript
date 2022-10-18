/**
 * Задача 2.
 *
 * Дан класс Developer.
 *
 * У класса два свойства:
 * - tasks — массив с выполненными задачами;
 * - addTask — метод для пополнения массива с выполненными задачами новой выполненной задачей.
 *
 * При создании двух экземпляров класса Developer,
 * если добавил задачу – почему-то эта-же задача
 * добавляется и второму разработчику. Попробуйте добавить одну задачу Ивану
 * и вторую задачу Андрею. Андрею будет добавлена его задача и задача Ивана.
 *
 * Задачи:
 * 1. Исправьте этот пример так, чтобы при добавлении задачи одним разработчиком
 * массив tasks второго разработчика никак не менялся.
 * Нужно, чтобы у каждого разработчика был свой независимый массив tasks.
 *
 * 2. При добавлении задачи форма остаётся грязной. Необходимо позаботиться
 * о том что бы форма сбрасывалась в исходное состояние после добавления задачи.
 *
 * 3. Необходимо позаботиться о том что бы нельзя было создать пустую задачу.
 * Если инпут task не заполнен или там присутствует только пробел.
 *
 *  Условия:
 * - Решить задачу в стиле прототипного наследования JavaScript.
 */

/////////////////////////НАЧАЛО ПРАВОК КЛАССА Developer/////////////////////////
function Developer() {
  this.tasks = [];
}

Developer.prototype.addTask = function (task) {
  this.tasks.push(task);
};
/////////////////////////ОКОНЧАНИЕ ПРАВОК КЛАССА Developer//////////////////////

const form = document.getElementById("form");
const dev1 = document.getElementById("dev1");
const dev2 = document.getElementById("dev2");

const developer1 = new Developer();
const developer2 = new Developer();

form.onsubmit = (event) => {
  event.preventDefault();

  const data = new FormData(event.target);
  const task = data.get("task");

  const developer = data.get("developer");
  const devElement = developer === "dev1" ? dev1 : dev2;
  const developerObj = developer === "dev1" ? developer1 : developer2;

  developerObj.tasks.push(task);

  const liElements = developerObj.tasks
    .map((task) => {
      return `<li class="list-group-item list-group-item-action">${task}</li>`;
    })
    .join("");

  devElement.innerHTML = null;
  devElement.insertAdjacentHTML("afterbegin", liElements);

  // Проверочный код
  console.log(developer1.tasks.length); // 2
  console.log(developer2.tasks.length); // 1
  // Проверочный код
};
