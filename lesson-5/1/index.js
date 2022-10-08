/**
 * Завдання 1.
 *
 * Створіть властивість `salary` в об'єкті `person`.
 * Під час читання цієї властивості повинен повертатися рядок з текстом.
 * Рядок, що повертається, повинен містити текст: `Зарплата за проект становить 100$`
 * Де 100 цей добуток ставки в годину `rate` на кількість відпрацьованих годин `hours`
 *
 * Створіть властивість `rate` в об'єкті `person`.
 * Властивість `rate` можна змінювати, але не можна видаляти.
 * Властивість `rate` має містити число.
 *
 * Створіть властивість `hours` в об'єкті `person`.
 * Властивість `hours` можна змінювати, але не можна видаляти.
 * Властивість `hours` має містити число.
 *
 * Умови:
 * - Властивість salary обов'язково має бути геттером.
 *
 * Зверніть увагу!
 * - Для того щоб звернутися до властивості об'єкта необхідно використовувати this.hours і this.rate
 * - Для вирішення цього завдання вам знадобиться defineProperty або defineProperties
 */

const person = {};

// РЕШЕНИЕ

Object.defineProperties(person, {
  salary: {
    get() {
      return `Зарплата за проект составляет  ${this.rate * this.hours}$.`;
    },
  },

  rate: {
    value: null,
    enumerable: true,
    writable: true,
    configurable: false,
  },

  hours: {
    value: null,
    enumerable: true,
    writable: true,
    configurable: false,
  },
});

person.rate = 30;
person.hours = 10;

// console.log(Object.getOwnPropertyDescriptors(person));
console.log(person.salary); // `Зарплата за проект составляет ххх$`

// console.log(typeof person.rate);
// console.log(typeof person.hours);
