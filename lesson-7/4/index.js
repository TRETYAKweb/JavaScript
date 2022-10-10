/**
 * Задача 4.
 *
 * Напишите скрипт, который будет возвращать новый массив.
 * Этот новый массив должен содержать исключительно длины строк, которые были в
 * переданном массиве.
 * Если строк в переданном массиве не было — нужно вернуть пустой массив.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива filter;
 * - Обязательно использовать встроенный метод массива map.
 *
 */

const arr = [
  1,
  "string",
  false,
  2,
  true,
  {
    name: "Уолтер",
    surname: "Уайт",
  },
  NaN,
  "",
  0,
  undefined,
  1,
  "Hello",
  true,
  void 0,
  () => {},
  " ",
  24,
  null,
  Infinity,
  "hello",
]; // ИЗМЕНЯТЬ ЗАПРЕЩЕНО

// РЕШЕНИЕ

newArray = arr
  .filter(function (element) {
    return typeof element === "string";
  })
  .map(function (element) {
    return element.length;
  });

console.log(newArray);
