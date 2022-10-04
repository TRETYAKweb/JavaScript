/**
 * Завдання 1
 *
 * Написати скрипт для додавання, віднімання, множення і ділення двох чисел.
 * Результат кожної операції повинен бути записаний у змінну та виведений у консоль.
 *
 * Приклад: sum1 = 1
 *          sum2 = 2
 *          результат додавання: 3
 *          результат віднімання: -1
 *          результат множення: 2
 *          результат ділення: 0.5
 */

const sum1 = prompt("Введите первое число:"); // ЗАБОРОНЕНО МІНЯТИ
const sum2 = prompt("Введите второе число:"); // ЗАБОРОНЕНО МІНЯТИ

// РІШЕННЯ

let convertedSum1 = Number(sum1);
let convertedSum2 = Number(sum2);

let addition = convertedSum1 + convertedSum2;
let subtraction = convertedSum1 - convertedSum2;
let multiplication = convertedSum1 * convertedSum2;
let division = convertedSum1 / convertedSum2;

console.log("Результат додавання: " + addition);
console.log("Результат віднімання: " + subtraction);
console.log("Результат множення: " + multiplication);
console.log("Результат ділення: " + division);
