/**
 * Задача 3.
 *
 * Напишите функции compose(), которая в качестве аргументов принимает неограниченное количество функций.
 *
 * При запуске compose() последовательно запускает коллбек-функции из аргументов.
 *
 * Важно: compose() выполняет коллбек-функции из аргументов НАЧИНАЯ С КОНЦА.
 *
 * Каждая коллбек-функция из цепочки в качестве своего аргумента принимает то, что возвращает предыдущая коллбек-функция.
 * То есть возвращаемое значение каждой коллбек-функции из цепочки
 * становится доступным из параметра следующей коллбек-функции в цепочке.
 *
 * Функция compose() возвращает ещё одну функцию с одним параметром.
 * Значение, переданное этой функции в качестве аргумента должно стать
 * параметром первой коллбек-функции в цепочке выполнения функции compose().
 *
 *
 * Генерировать ошибки если:
 * - Любой из аргументов не является функцией;
 * - Любая функция из аргументов не вернула значение.
 *
 * Заметка:
 * Если функции, которая является возвращаемым значением compose()
 * не передать в качестве аргумента какое-либо значение, генерировать ошибку не нужно.
 */

// Решение

// result = rest[i](result);

function compose(...rest) {
  return (h) => {
    let result = h;

    for (let i = rest.length - 1; i >= 0; i--) {
      if (typeof rest[i] !== "function") {
        throw new Error(`This is not a function`);
      }

      if (rest[i]() === "undefined") {
        throw new Error(`This function returns undefined`);
      }
      result = rest[i](result);
    }

    return result;
  };
}

const result1 = compose(
  (prevResult) => prevResult + "o",
  (prevResult) => prevResult + "l",
  (prevResult) => prevResult + "l",
  (prevResult) => prevResult + "e"
)("h");

const result2 = compose(
  (prevResult) => prevResult + "o",
  (prevResult) => prevResult + "l",
  (prevResult) => prevResult + "l",
  (prevResult) => prevResult + "e",
  () => "h"
)();

console.log(result1); // 'hello'
console.log(result2); // 'hello'
