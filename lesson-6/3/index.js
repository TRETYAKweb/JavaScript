/**
 * Задача 3.
 *
 * Создайте функцию `isEven`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе чётное — возвращается true.
 * Если число, переданное в аргументе нечётное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// РЕШЕНИЕ

// function validate(param) {
//   if (typeof param !== "number") {
//     throw new Error(`Error, parameter is not a number`);
//   }
// }

// function returnBoolean(a) {
//   if (a % 2 === 0) {
//     console.log(`${Boolean(a)}. ${a} - четное число`);
//   } else {
//     console.log(`${!Boolean(a)}. ${a} - нечетное число`);
//   }
// }

// function isEven(number) {
//   validate(number);
//   return returnBoolean(number);
// }

// OR

function validate(param) {
  if (typeof param !== "number") {
    throw new Error(`Error, parameter is not a number`);
  }
}

function returnBoolean(a) {
  const result = a % 2 === 0 ? true : false;
  return result;
}

function isEven(number) {
  validate(number);
  return returnBoolean(number);
}

console.log(isEven(3)); // false
console.log(isEven(4)); // true
// console.log(isEven("Доброго вечора ми з україни")); // Error
