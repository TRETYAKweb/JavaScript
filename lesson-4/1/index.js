/*
 * Завдання 1.
 *
 * Дописати потрібний функціонал, щоб код працював правильно.
 *
 * Дана вартість у вигляді рядка: $120.
 * Перший символ - валюта, потім - число.
 * Необхідно з такого рядка виділяти число-значення, у даному випадку 120.
 * Зверніть увагу, що потрібно повертати не рядок 120, а саме число 120.
 *
 * Підказка:
 * - Для перевірки на NaN потрібно використовувати isNaN();
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/isNaN
 */

const PRICE = "$" + prompt("Введіть вартість продукту"); // ЗМІНЯТИ ЗАБОРОНЕНО

// РІШЕННЯ

// const convertedPrice = Number(PRICE.slice(1));
// console.log(convertedPrice);

// OR //

const convertedPrice = Number(PRICE.slice(1)) || PRICE.slice(1);

if (isNaN(convertedPrice)) {
  alert(`Помилка, будь ласка введіть число`);

  while (true) {
    const newPrice = +prompt("Введіть вартість продукту:", 0);

    if (isNaN(newPrice)) {
      alert(`Помилка, будь ласка введіть число`);
    } else {
      alert(`Вартість продукту: $${newPrice}`);
      console.log("Вартість продукту: $" + newPrice);
      break;
    }
  }
} else {
  alert(`Вартість продукту: $${convertedPrice}`);
  console.log("Вартість продукту: $" + convertedPrice);
}
