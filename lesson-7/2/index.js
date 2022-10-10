/**
 * Задача 2.
 *
 * Напишите скрипт, который проверяет идентичны ли массивы.
 * Если массивы полностью идентичны - в переменную flag присвоить значение true,
 * иначе - false.
 *
 * Пример 1: const arr1 = [1, 2, 3];
 *           const arr2 = [1, '2', 3];
 *           flag -> false
 *
 * Пример 2: const arr1 = [1, 2, 3];
 *           const arr2 = [1, 2, 3];
 *           flag -> true
 *
 * Пример 3: const arr1 = [];
 *           const arr2 = arr1;
 *           flag -> true
 *
 * Пример 4: const arr1 = [];
 *           const arr2 = [];
 *           flag -> true
 *
 * Условия:
 * - Обязательно проверять являются ли сравниваемые структуры массивами;
 *
 */

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
let flag = "";

// РЕШЕНИЕ

function checksArrays(array1, array2) {
  if (Array.isArray(array1) && Array.isArray(array2)) {
    return true;
  } else {
    throw new Error(`Failed array check`);
  }
}

function checksArraysAreIdentical(array1, array2) {
  checksArrays(array1, array2);

  if (array1.length > 0 && array2.length > 0) {
    for (let i = 0; i < array1.length; i++) {
      const arrayElement = array1[i];
      const arrayElement2 = array2[i];

      if (arrayElement === arrayElement2) {
        flag = true;
      } else {
        flag = false;
        break;
      }
    }
  } else if (array1.length === 0 && array2.length === 0) {
    return (flag = true);
  } else {
    throw new Error(`Error`);
  }

  return flag;
}

checksArraysAreIdentical(arr1, arr2);

console.log(flag);
