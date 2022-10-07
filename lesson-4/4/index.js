/*
 * Завдання 4.
 *
 * Дописати потрібний функціонал, щоб код працював правильно.
 *
 * Необхідно перевірити довжину рядка змінної string.
 * Якщо вона перевершує maxLength - замінює кінець string на ... таким чином, щоб її довжина дорівнювала maxLength.
 * У консоль повинен вивестися (за потреби) усічений рядок.
 *
 * Приклад 1: string -> 'Ось що мені хотілося б сказати на цю тему:'
 *                       maxLength -> 21
 *                       result -> 'Ось що мені хотіло...'
 *
 * Приклад 2: string -> 'Ось що мені хотілося'
 *                       maxLength -> 100
 *                       result -> 'Ось що мені хотілося'
 *
 * Умови:
 * - Змінна string повинна мати тип string;
 * - Змінна maxLength повинна мати тип number.
 *
 */
const string = prompt("Введіть рядок, який потрібно скоротити:"); // ЗМІНЯТИ ЗАБОРОНЕНО
const maxLength = prompt("Введіть максимальну довжину рядка:"); // ЗМІНЯТИ ЗАБОРОНЕНО

// РІШЕННЯ

const convertedMaxLength = Number(maxLength);

if (string.length > convertedMaxLength) {
  const stringTransform = string.slice(0, maxLength - 3) + "...";
  console.log(stringTransform);
} else {
  console.log(string);
}
