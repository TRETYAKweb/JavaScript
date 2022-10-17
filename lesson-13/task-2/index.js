/**
 * Задача 2.
 *
 * Добавьте роботу геттер и сеттер для приватного свойства energy.
 * Нужно, чтобы внешний код мог узнать заряд батареи робота.
 *
 * Условия:
 * - заданную форму конструктора включая его параметры менять нельзя — можно только дополнять;
 * - для отображения инфрмации о количестве энергии необходимо динамически создать элемент "p" с классом text-success;
 * - для отображения инфрмации об ошибке необходимо динамически создать элемент "p" с классом text-danger;
 * - все "p" элементы необходимо добавлять в "div" с классом messages.
 *
 * Генерировать ошибки если:
 * - новый заряд батареи устанавливается в значении меньшем, чем 0;
 * - новый заряд батареи устанавливается в значении большем, чем значение MAX_ENERGY_CAPACITY;
 * - при создании экземпляра CleanerRobot изначальный уровень энергии зада в не рамок допустимого диапазона.
 *
 * Приблизительный план действий:
 * 1. Добавить идентификатор в форму, который будет использоваться для добавления обработчика onsubmit
 * 2. Создать экземпляр CleanerRobot
 * 3. При сабмите формы устанавливать новое значение уровня энергии робота при помощи метода setEnergy
 * 4. При клике на элемент button читать значение уровня энергии робота и выводить его в p элемент с классом text-success
 * 5. Если в работе робота возникнут ошибки выводить их в p элемент с классом text-danger
 *
 * Подсказки:
 * - в HTML допускается добавление идентификаторов для более удобной работы с дом
 * - вам могут потребоваться следующие методы и свойства — innerHTML, getElementById, createElement, onsubmit, onclick
 */

function CleanerRobot(initialEnergy = 0 /* Изначальный заряд батареи */) {
  this.getEnergy = getEnergy;
  this.setEnergy = setEnergy;

  const MAX_ENERGY_CAPACITY = 100; /* Максимальная ёмкость батареи. */
  let energy = null;

  this.setEnergy(initialEnergy);

  function getEnergy() {
    return energy;
    // Реализация метода по чтению уровня заряда робота
  }
  function setEnergy(initialEnergy) {
    if (initialEnergy < 0) {
      throw new Error(`Заряд батареи не может быть меньше 0.`);
    }

    if (initialEnergy > MAX_ENERGY_CAPACITY) {
      throw new Error(
        `Невозможно установить текущий заряд батареи больше, чем ${MAX_ENERGY_CAPACITY}`
      );
    }

    if (typeof initialEnergy !== "number") {
      throw new Error(`Введите число`);
    }

    energy = initialEnergy;
    // Реализация метода по установке уровня заряда робота
  }
}

const cleanerRobot = new CleanerRobot(22);

// Ниже необходимо написать логику работы с DOM

const messagesElem = document.querySelector(".messages");
const formElem = document.querySelector("form");
const btnInfoElem = document.querySelector(".btn-info");

const textSuccessElem = document.createElement("p");
const textDangerElem = document.createElement("p");

textSuccessElem.setAttribute("class", "text-success");
textDangerElem.setAttribute("class", "text-danger");

messagesElem.appendChild(textSuccessElem);
messagesElem.appendChild(textDangerElem);

console.log(formElem);

formElem.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const energy = +formData.get("energy");

  try {
    cleanerRobot.setEnergy(energy);
  } catch (error) {
    textDangerElem.innerHTML = `${error.name}: ${error.message}`;
    textSuccessElem.innerHTML = "";
  }
});

btnInfoElem.addEventListener("click", (event) => {
  textSuccessElem.innerHTML = `Текущий заряд батареи: ${cleanerRobot.getEnergy()}`;
  textDangerElem.innerHTML = "";
});

// console.log(pContent);

/* Текущий заряд батареи: 22 */
/* Информацию необходимо вывести в p элемент с классом text-success */

/* Этот код необходимо вызвать при сабмите формы */

/* Текущий заряд батареи: 55 */
/* Информацию необходимо вывести в p элемент с классом text-success */

try {
  new CleanerRobot(-1);
} catch (error) {
  /* Error: New energy level can not be less than 0. */
  /* Информацию необходимо вывести в p элемент с классом text-danger */
  textDangerElem.innerHTML = `${error.name}: ${error.message}`;
  textSuccessElem.innerHTML = "";
}

try {
  cleanerRobot.setEnergy(-22);
} catch (error) {
  /* Error: New energy level can not be less than 0. */
  /* Информацию необходимо вывести в p элемент с классом text-danger */
  textDangerElem.innerHTML = `${error.name}: ${error.message}`;
  textSuccessElem.innerHTML = "";
}

try {
  cleanerRobot.setEnergy(101);
} catch (error) {
  /* Error: New energy level can not be more than 100. */
  /* Информацию необходимо вывести в p элемент с классом text-danger */
  textDangerElem.innerHTML = `${error.name}: ${error.message}`;
  textSuccessElem.innerHTML = "";
}
