/**
 * Задача 1.
 *
 * Дан базовый класс робота-уборщика.
 *
 * Задача:
 * Добавьте роботу функционал употребления энергии:
 * - при начале уборки уровень энергии должен уменьшиться;
 * - в расчёте использовать внутренний коэффициент ENERGY_CONSUMPTION.
 *
 * Затем добавьте роботу публичный метод stop() для остановки процесса уборки.
 * В если уборка остановлена раньше времени завершения,
 * onReady сработать не должен, а также нужно вывести другое сообщение.
 *
 * Условия:
 * - заданную форму конструктора включая его параметры менять нельзя — можно только дополнять и переносить в методы обработки события;
 * - использовать функцию clearTimeout для завершения уборки;
 * - идентификатор таймера нужно хранить в приватной переменной конструктора timerId.
 * - значение INITIAL_ENERGY необходимо получить из инпута name="energy"
 * - значение INITIAL_SQUARE необходимо получить из инпута name="square"
 * - работу робота необходимо запускать по нажатию на кнопку в форме — Начать уборку. Обратит внимание, что форма не должна перезагружать страничку
 * - все информационные сообщения необходимо выводить в HTML в элемент — p. Заменить console.log на код для вывода информации в HTML
 *
 * Приблизительный план действий:
 * 1. Добавить идентификатор в форму, который будет использоваться для добавления обработчика onsubmit
 * 2. Из инпутов извлечь необходимую информацию и передать в конструктор CleanerRobot
 * 3. При подтверждении формы необходимо создать экземпляр CleanerRobot и запустить его работу при помощи метода clean
 * 4. Добавить селектор p элементу и использовать его для отображения текста из методов onReady и clean
 * 5. После завершения работы с DOM приступить к реализации логики робота
 *
 * Подсказки:
 * - в HTML допускается добавление идентификаторов для более удобной работы с дом
 * - вам могут потребоваться следующие методы и свойства — innerHTML, getElementById, onsubmit
 */

function CleanerRobot(
  initialEnergy = 0 /* Изначальный заряд батареи робота % */,
  cleaningSquare /* Площадь для уборки в метрах. */
) {
  let energy = initialEnergy;
  let timerId = 0;
  const ENERGY_CONSUMPTION = 1; /* Расход энергии: 1% батареи на 1 час работы. */
  const CLEANING_SPEED = 10; /* Скорость уборки: 10 квадратных метров в час. */
  const getCleaningTime = () => cleaningSquare / CLEANING_SPEED;
  const onReady = () => {
    this.сonsumesEnergy();
    text.innerHTML = `Уборка завершена. Осталось заряда батареи: ${energy}%.`;
  };

  this.clean = () => {
    const cleaningTime = getCleaningTime();

    text.innerHTML = `Начинаю процесс уборки. Время уборки: ${cleaningTime} часов.`;

    this.сonsumesEnergy();

    if (energy > 0) {
      timerId = setTimeout(
        onReady,
        cleaningTime * 1000
      ); /* Для удобства время уборки сокращено до формата 1 час = 1 секунда */
    } else {
      clearTimeout(timerId);
      this.stop();
    }
  };

  // Решение

  this.stop = () => {
    if (energy > 0) {
      text.innerHTML = `Уборка завершена досрочно. Осталось заряда батареи: ${energy}%`;
    } else {
      text.innerHTML = `Робот разряжен :(`;
    }
  };

  this.сonsumesEnergy = () => {
    return (energy = initialEnergy / ENERGY_CONSUMPTION - getCleaningTime());
  };
}

const form = document.querySelector("#cleanerRobotLaunchForm");
const text = document.querySelector("#text");

text.innerHTML = "";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const energy = +formData.get("energy");
  const square = +formData.get("square");

  const cleanerRobot = new CleanerRobot(energy, square);

  cleanerRobot.clean();
});

// const INITIAL_ENERGY = 50;
// const INITIAL_SQUARE = 45;

// setTimeout(() => {
//     cleanerRobot.stop(); /* Спустя 1 секунду: Уборка завершена досрочно. Осталось заряда батареи: 45.5. */
// }, 1000);
