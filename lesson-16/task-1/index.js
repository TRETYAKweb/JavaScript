/*
Задача 1

Создайте класс `Customers` который умеет работать с механизмом `for of`.

1. Класс `Customers` содержит метод `add` который принимает объект в качестве параметра. 
   У этого объекта есть обязательное поле `name` и необязательное поле `verified`.
2. Класс `Customers` при переборе с помощью `for of` должен учитывать только объекты у которых был установлен флаг `verified: true`.

**Обратите внимание**:
1. Использование генераторов **запрещено**.
2. Использование посторонних библиотек **запрещено**
3. У класса `Customers` **должен** быть метод `Symbol.iterator`
*/

// Если всё написано верно, в правом списке должны будут оказаться записи из левого списка
// Для которых значение checked = true

// РЕШЕНИЕ
class Customers {
  #arr = [];

  add(obj) {
    if (obj.verified) {
      this.#arr.push(obj.name);
    }

    return this.#arr;
  }

  [Symbol.iterator]() {
    let i = 0;

    return {
      next: () => {
        const done = i >= this.#arr.length;
        const value = !done ? this.#arr[i++] : undefined;

        return {
          done,
          value,
        };
      },
    };
  }
}
// РЕШЕНИЕ

const toFilter = document.getElementById("toFilter");
const filtered = document.getElementById("filtered");
const btn = document.getElementById("btn");
const liElements = Array.from(toFilter.querySelectorAll("li"));

const generateCustomer = (item, id) => `
    <li class="list-group-item">
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="filtered${id}" checked>
            <label class="custom-control-label" for="filtered${id}">${item}</label>
        </div>
    </li>
`;

btn.onclick = () => {
  const customers = new Customers();
  let counter = 0;
  let list = "";

  filtered.innerHTML = null;

  liElements.forEach((element) => {
    const name = element.querySelector("label").innerHTML;
    const verified = element.querySelector("input").checked;

    customers.add({
      name,
      verified,
    });
  });

  for (const customer of customers) {
    list += generateCustomer(customer, counter);
    counter++;
  }

  filtered.insertAdjacentHTML("afterbegin", list);
};
