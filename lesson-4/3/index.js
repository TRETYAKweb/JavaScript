/*
 * Завдання 3.
 *
 * Дописати потрібний функціонал, щоб код працював правильно.
 *
 * Необхідно присвоїти змінній result значення true,
 * якщо рядок source містить підрядок spam. Інакше – false.
 *
 * Приклад 1: source -> pitterXXX@gmail.com,
 *            spam -> 'xxx',
 *            result -> true;
 *
 * Приклад 2: source -> pitterXxX@gmail.com,
 *            spam -> 'XXX',
 *            result -> true;
 *
 * Приклад 3: source -> pitterXXX@gmail.com,
 *            spam -> 'sss',
 *            result -> false;
 *
 * Умови:
 * - Рядки повинні бути не чутливими до регістру
 * - Потрібно використовувати метод includes()
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/includes
 */

const source = prompt("Введіть електропошту:"); // ЗМІНЯТИ ЗАБОРОНЕНО //tretyakbroXXX@gmail.com
const spam = prompt("Введіть рядок, який потрібно знайти в електропошті"); // ЗМІНЯТИ ЗАБОРОНЕНО

// РІШЕННЯ

let result = source.toLowerCase().includes(spam.toLowerCase());
console.log(result);
