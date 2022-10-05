// Перепишіть `if..else` з використанням кількох операторів `?`.
// Для читання - оформляйте код у кілька рядків.

////////////////// Завдання //////////////////
let message;

// if (login === 'Pitter') {
//   message = 'Hi';
// } else if (login === 'Owner') {
//   message = 'Hello';
// } else if (login === '') {
//   message = 'unknown';
// } else {
//   message = '';
// }

////////////////// Рішення //////////////////

const login = "Pitter";
// const login = "Owner";
// const login = "";

message =
  login === "Pitter"
    ? "hi"
    : login === "Owner"
    ? "Hello"
    : login == ""
    ? "unknown"
    : "";

console.log(message);
