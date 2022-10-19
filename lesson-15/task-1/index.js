/**
 * Задача 1.
 *
 * Реализуйте класс Worker, который будет иметь следующие свойства:
 *
 * - firstName — имя;
 * - lastName — фамилия;
 * - rate — ставка за день работы;
 * - hours — количество отработанных часов.
 *
 * Класс должен иметь метод getSalary(), который будет возвращать зарплату работника.
 * Зарплата - это произведение (умножение) ставки rate на количество отработанных часов hours.
 *
 * Условия:
 * - Реализация решения — это синтаксис современных классов JavaScript;
 */

// РЕШЕНИЕ
class Worker {
  constructor(firstName, lastName, rate, hours) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.rate = rate;
    this.hours = hours;
  }

  getSalary() {
    return this.rate * this.hours;
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
    // console.log(worker.firstName); // Джон
    // console.log(worker.lastName); // Доу
    // console.log(worker.rate); // 10
    // console.log(worker.hours); // 31
    // console.log(worker.getSalary()); // 10 * 31 = 310

    workersHTML += getWorker({
      name: `${worker.firstName} ${worker.lastName}`,
      hours: worker.hours,
      rate: worker.rate,
      salary: `${worker.getSalary()} $`,
    });
  });

  list.insertAdjacentHTML("afterbegin", workersHTML);
};
