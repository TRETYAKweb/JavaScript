const developer1 = {
  name: {
    first: "John",
    last: "Dou",
  },
  age: 30,
  disabled: false,
  rete: 10,
};

const developer2 = {
  name: {
    first: "Joe",
  },
  age: 25,
  rete: 20,
};

class Developer {
  constructor(developer) {
    this.developer = developer;
  }

  getFullName() {
    return `${this.developer.name.first} ${this.developer.name.last}`;
  }

  getSalary(hours) {
    if (this.developer.disabled) {
      throw new Error("Пользователь заблокирован. Обратитесь к администратору");
    }

    return this.developer.rete * hours;
  }
}

const john = new Developer(developer1);
const joe = new Developer(developer2);

console.log(john.getFullName()); // John Dou
console.log(john.getSalary(10)); // 100

console.log(joe.getFullName()); // Joe
console.log(joe.getSalary(10)); // 200
