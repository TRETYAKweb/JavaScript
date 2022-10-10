/**
 * Задача 5.
 *
 * Написать скрипт, который возвращает массив с объектами - характеристиками элементов массива.
 * Объекты должен иметь такие свойства:
 *      value - значение элемента;
 *      type - тип данных элемента.
 *
 * Если тип данных элемента СТРОКА объекты должны иметь дополнительное свойство length.
 * Если тип данных элемента не ЧИСЛО и не СТРОКА объекты должны иметь дополнительное
 * свойство error с текстом 'Invalid type'.
 *
 * Пример: arr -> ['Доброе утро!', 2, {}]
 *         objArr = [
 *              { value: 'Доброе утро!', type: 'string', length: 12 },
 *              { value: 2, type: 'number' },
 *              { value: {}, type: 'object', error: 'Invalid type' }
 *         ];
 *
 * Условия:
 *  - Обязательно использовать встроенный метод массива map.
 */

const array = [
  "Доброе утро!",
  null,
  2,
  "Привет",
  NaN,
  () => {},
  [],
  "Добрый вечер!",
  {},
  "ананас",
  "#",
  "До свидания!",
]; // ИЗМЕНЯТЬ ЗАПРЕЩЕНО

// РЕШЕНИЕ

const newArray = array.map(function (element) {
  const obj = { value: element, type: typeof element };
  if (typeof element === "string") {
    obj.length = element.length;
  } else if (typeof element !== "string" && typeof element !== "number") {
    obj.error = "Invalid type";
  }
  return obj;
});

console.log(newArray);
