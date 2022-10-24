/** 
# Задача 2

Улучшите класс `Customers` добавив функцию генератор.

**Обратите внимание**:

1. Класс `Customers` после этого должен работать **идентично** предыдущей задаче.
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

  *[Symbol.iterator]() {
    for (const item of this.#arr) {
      yield item;
    }
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
