/*
 * Завдання 2.
 *
 * Дописати необхідний функціонал щоб код працював правильно.
 *
 * Необхідно змінити перший символ рядка на символ написаний з великої літери
 * і вивести цей рядок на консоль.
 *
 * Приклад 1: привіт -> Привіт
 *
 * Приклад 2: 222 -> Error.
 *
 * Умови:
 * - Необхідно перевірити, що введений текст не число інакше виводити помилку в консоль.
 */

const str = prompt("Введіть будь-який рядок:"); // ЗМІНЯТИ ЗАБОРОНЕНО

// РІШЕННЯ

const convertedStr = Number(str) || str;

if (isNaN(convertedStr)) {
  const transformedString =
    convertedStr[0].toUpperCase() + convertedStr.slice(1);
  console.log(transformedString);
} else {
  console.log(`Error!`);
}
