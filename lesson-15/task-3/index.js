/**
 * Задача 3.
 *
 * Улучшите класс Worker из предыдущей задачи.
 * Для свойства rate и hours добавьте методы для установки значений.
 *
 * Условия:
 * - Реализация решения — это синтаксис современных классов JavaScript;
 * - Приватные свойства необходимо объявить с помощью официального синтаксиса (#имяСвойства).
 */

// РЕШЕНИЕ
class Worker {
  #firstName = null;
  #lastName = null;
  #rate = null;
  #hours = null;

  constructor(firstName, lastName, rate, hours) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#rate = rate;
    this.#hours = hours;
  }

  getName() {
    return `${this.#firstName} ${this.#lastName}`;
  }

  getRate() {
    return this.#rate;
  }

  setRate(rate) {
    this.#rate = rate;
  }

  getHours() {
    return this.#hours;
  }

  setHours(hours) {
    this.#hours = hours;
  }

  getSalary() {
    return this.#rate * this.#hours;
  }
}

// РЕШЕНИЕ

const workers = [];
const form = document.getElementById("regForm");
const list = document.getElementById("list");

form.onsubmit = (event) => {
  event.preventDefault();
  list.innerHTML = null;

  const formData = new FormData(event.target);
  const name = formData.get("fullname");
  const [firstName, lastName] = name.split(" ");
  const hours = formData.get("hours");
  const rate = formData.get("rate");

  let workersHTML = "";

  workers.unshift(new Worker(firstName, lastName, hours, rate));
  workers.forEach((worker) => {
    // ПРОВЕРОЧНЫЙ КОД
    // console.log(worker.getName()); // Джон Доу
    // console.log(worker.getRate()); // 10
    // console.log(worker.getHours()); // 31
    // console.log(worker.getSalary()); // 10 * 31 = 310

    workersHTML += getWorker({
      name: worker.getName(),
      hours: worker.getHours(),
      rate: worker.getRate(),
      salary: `${worker.getSalary()} $`,
    });
  });

  list.insertAdjacentHTML("afterbegin", workersHTML);
};
