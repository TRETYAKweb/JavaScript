/*
# Задача 2

Создайте функцию `getCustomers` которая умеет объединять 2 массива с объектами.

Операция объединения происходит по ключу `id` и только для объектов у которых установлен флаг `verified: true`.

**Обратите внимание**:

1. Функция `getCustomers` должна возвращать промис;
2. Использование `async & await` **запрещено**;
3. Использование посторонних библиотек **запрещено**;
4. В том случае если в массиве `countries` отсутствует необходимый `id` промис **должен** реджектится с текстом `We don't have information about country for this customer: ${customer.name}`;
5. Склеивание происходит **только** для объектов с флагом `verified: true`.
*/

// Решение

// Пример использования

const customers = [
  {
    id: "A1",
    name: "Oliver",
    verified: true,
  },
  {
    id: "A2",
    name: "alex",
  },
  {
    id: "A3",
    name: "Lolo",
    verified: true,
  },
  {
    id: "A4",
    name: "Jora",
  },
];

const countries = [
  {
    id: "A6",
    country: "usa",
  },
  {
    id: "A3",
    country: "usa",
  },
  {
    id: "A1",
    country: "usa",
  },
  {
    id: "A2",
    country: "poland",
  },
];

const customersArray = [];

const getCustomers = (customers, countries) => {
  return new Promise((resolve, reject) => {
    customers
      .filter((el) => el.verified)
      .map((el) => {
        for (let i = 0; i < countries.length; i++) {
          if (el.id === countries[i].id) {
            customersArray.push({ ...el, country: countries[i].country });
          } else {
            reject(
              `We don't have information about country for this customer:${el.name}`
            );
          }
        }
      });
    resolve(customersArray);
  });
};

getCustomers(customers, countries)
  .then((customers) => console.log(customers))
  .catch((error) => console.log(error));
