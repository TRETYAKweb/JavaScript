/*
 * Завдання 2.
 *
 * Створіть об'єкт `user`, з властивостями `name`, `surname`, `job` та `data`.
 *
 * При читанні властивості `data` повинен повертатися рядок з текстом.
 * Рядок, що повертається, повинен містити текст: `Привіт! Я `name` `surname` і я працюю `job` `.
 *
 *
 * Значення властивостей `name`, `surname`, `job` в об'єкті `user` потрібно одержувати з функції prompt().
 *
 * Умови:
 * - Властивість `data` обов'язково має бути геттером.
 *
 * Зверніть увагу!
 * - Для того щоб звернутися до властивості об'єкта необхідно використовувати this.name, this.surname і this.job. *
 */

// РІШЕННЯ

const user = {};

Object.defineProperties(user, {
  name: {
    value: null,
    enumerable: true,
    writable: true,
    configurable: true,
  },

  surname: {
    value: null,
    enumerable: true,
    writable: true,
    configurable: true,
  },

  job: {
    value: null,
    enumerable: true,
    writable: true,
    configurable: true,
  },

  data: {
    get() {
      return `Привіт! Я ${this.name} ${this.surname}  і я працюю ${this.job}`;
    },
  },
});

user.name = prompt("Привіт як тебе звати ?");
user.surname = prompt("Яке твоє прізвище?");
user.job = prompt("Ким працюєш ?");

alert(user.data);
console.log(user.data);
