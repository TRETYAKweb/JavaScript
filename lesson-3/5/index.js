/**
 * Завдання 5
 *
 * Використовуючи цикл знайти факторіал числа.
 * Факторіал числа вивести у консоль.
 */

const number = prompt("Введіть число:"); // ЗМІНЮВАТИ ЗАБОРОНЕНО

//РІШЕННЯ

const convertedNumber = Number(number);

let total = 1;

for (let i = 1; i <= convertedNumber; i++) {
  total *= i;
}

console.log(`Факториал числа ${convertedNumber}! = ${total}`);
