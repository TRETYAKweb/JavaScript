/**
 * Задача 2.
 *
 * Создать функцию calculateAdvanced(), которая в качестве аргументов принимает неограниченное количество функций.
 * При запуске calculateAdvanced() последовательно запускает коллбек-функции из аргументов.
 *
 * Каждая коллбек-функция из цепочки в качестве своего аргумента принимает то, что возвращает предыдущая коллбек-функция.
 *
 * Если на каком-то из вызовов функция-коллбек возбудила ошибку — отловите и сохраните её.
 *
 * После отлова ошибки перейдите к выполнению следующего коллбека.
 *
 * Функция calculateAdvanced() должна возвращать объект с двумя свойствами: `value` и `errors`:
 * - свойство `value` содержит результат вычисления всех функций из цепочки;
 * - свойство `errors` содержит массив с объектами, где каждый объект должен обладать следующими свойствами:
 *     - index — индекс коллбека, на котором ошибка была возбуждена;
 *     - name — имя ошибки;
 *     - message — сообщение ошибки.
 *
 *
 * Если во время выполнения функции-коллбека возникла ошибка, результат выполнения она не вернёт.
 *
 * Поэтому, для продолжения цепочки выполнения
 * необходимо брать результат последней успешно выполненной функции-коллбека.
 *
 * Генерировать ошибки если:
 * - Любой из аргументов не является функцией (в этой задаче, этой ошибкой нужно именно сломать скрипт, отлавливать её не нужно).
 */

// Решение

function calculateAdvanced(...rest) {
  const errors = [];

  let res = rest[0]();

  for (let i = 1; i < rest.length; i++) {
    try {
      if (typeof rest[i] !== "function") {
        throw new Error("Value is not a function.");
      }

      const value = rest[i](res);

      if (typeof value === "undefined") {
        throw new Error(`This function returns undefined.`);
      }

      res = value;
    } catch (err) {
      if (err.message === "Value is not a function.") {
        throw err;
      }
      errors.push({
        index: i,
        name: err.name,
        message: err.message,
      });
    }
  }

  return { value: res, errors };
}

const result = calculateAdvanced(
  // '() => {}',
  () => {
    return 7;
  },
  // 2,
  () => {},
  (prevResult) => {
    return prevResult + 4;
  },
  () => {
    throw new RangeError("Range is too big.");
  },
  (prevResult) => {
    return prevResult + 1;
  },
  () => {
    throw new ReferenceError("ID is not defined.");
  },
  (prevResult) => {
    return prevResult * 5;
  }
);

console.log(result);

// Функция вернёт:
// { value: 60,
//     errors:
//      [ { index: 0,
//          name: 'Error',
//          message: 'callback at index 0 did not return any value.' },
//        { index: 2,
//          name: 'Error',
//          message: 'callback at index 2 did not return any value.' },
//        { index: 4, name: 'RangeError', message: 'Range is too big.' },
//        { index: 6,
//          name: 'ReferenceError',
//          message: 'ID is not defined.' } ] }

// try {

// }catch (e) {
//     e.name
//     e.message
// }
