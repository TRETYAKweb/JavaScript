/**
 * Задание 1.
 *
 * При сабмите формы необходимо записать данные в локальное хранилище.
 *
 * При регистрации 2-го человека необходимо прочитать из локального хранилища массив с уже
 * сохранёнными людьми и дописать в него новый объект. После чего выполнить сохранение
 * нового массива в локальное хранилище.
 *
 * Условия:
 * - Генерировать ошибку еесли пользователь пытаеться подтвердить форму без заполненных полей.
 */

const form = document.querySelector("#form");

const key = "usernames";

const usernames = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const username = formData.get("username");

  try {
    if (!username.trim()) {
      throw new Error("Data must not be empty");
    }
  } catch (err) {
    console.log(err.message);
  }

  if (localStorage.getItem(key)) {
    const data = localStorage.getItem(key);
    const dataParse = JSON.parse(data);

    const getObject = (username) => ({
      username,
    });

    const obj = getObject(username);

    dataParse.push(obj);

    localStorage.setItem(key, JSON.stringify(dataParse));
  } else {
    const getObject = (username) => ({
      username,
    });

    const obj = getObject(username);

    usernames.push(obj);

    localStorage.setItem(key, JSON.stringify(usernames));
  }

  form.reset();
});
