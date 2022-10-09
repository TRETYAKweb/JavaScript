/**
 * Задача 4.
 *
 * Создайте функцию `getDivisors`, которая принимает число в качестве аргумента.
 * Функция возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента был передано число меньшее, чем 1.
 *
 * Заметки:
 * - В решении вам понадобится использовать цикл с перебором массива.
 */

// РЕШЕНИЕ

// Вариант 1

function validate(param) {
  if (typeof param !== "number") {
    throw new Error(`Error, parameter is not a number`);
  }
}

function checkNumber(a) {
  if (a < 1) {
    throw new Error(`This number is less than one`);
  }
}

function numberDivisors(number) {
  console.log(`делители числа ${number}:`);
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      console.log(i);
    }
  }
}

function getDivisors(num) {
  validate(num);
  checkNumber(num);
  numberDivisors(num);
}

getDivisors(15); // [1, 3, 5, 15];
// getDivisors("Доброго вечора ми з україни"); // Error
// getDivisors(-2); // Error

// Вариант 2 (Не смог полностью реализовать)

// function checkNumber(lol) {
//   while (lol < 1 || isNaN(lol)) {
//     alert(`Число ${lol} меньше чем один, или не является числом`);

//     lol = +prompt("Введите пожалуйста число:", 0);

//     if (typeof lol === "number" && lol > 1) {
//       break;
//     }
//   }
// }

// function numberDivisors(number) {
//   console.log(`делители числа ${number}:`);
//   for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//       console.log(i);
//     }
//   }
// }

// function getDivisors(num) {
//   checkNumber(num);
//   numberDivisors(num);
// }

// getDivisors(+prompt(`Введите число:`, 0));

// Вариант 2 (Не смог полностью реализовать)
