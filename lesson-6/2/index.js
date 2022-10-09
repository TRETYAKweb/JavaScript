/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех переданных числовых аргументов.
 *
 * Условия:
 * - Функция должна принимать любое количество аргументов;
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// РЕШЕНИЕ

// function validate(number) {
//   if (typeof number !== "number") {
//     throw new Error(`Error, parameter is not a number`);
//   }
// }

// function f() {
//   let values = 0;

//   for (let i = 0; i < arguments.length; i++) {
//     validate(arguments[i]);
//     const value = arguments[i];
//     values += value;
//   }

//   return values;
// }

// OR

function validate(number) {
  if (typeof number !== "number") {
    throw new Error(`Error, parameter is not a number`);
  }
}

function f() {
  let values = 0;

  for (let key in arguments) {
    validate(arguments[key]);
    const value = arguments[key];
    values += value;
  }

  return values;
}

console.log(f(1, 1, 1, 2, 1, 1, 1, 1)); // 9
console.log(f(1, 1, 1)); //
console.log(f(1, 1, 5, 98)); //
