/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа, переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве аргумента был передан не числовой тип.
 */

// РЕШЕНИЕ

// Первый вариант

function validate(a) {
  if (typeof a !== "number") {
    throw new Error(`Error, parameter is not a number`);
  }
}

function f(number) {
  validate(number);

  const result = number ** 3;

  return result;
}

console.log(f(2)); // 64

// Второй вариант с callback

function f2(nummber, callback) {
  callback(nummber);
}

function validate(param) {
  if (typeof param !== "number") {
    throw new Error(`Error, parameter is not a number`);
  }
}

function returnsCubeNumber(a) {
  validate(a);

  const result = a ** 3;

  return console.log(result);
}

f2(4, returnsCubeNumber);

// throw new Error('Error text');
