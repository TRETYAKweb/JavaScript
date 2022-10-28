"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Для запуска файла использовать команду ts-node src/index.ts находясь в папке homeworks/2
const emitter_1 = require("./emitter");
const types_1 = require("./types");
class Bank extends emitter_1.EventEmitter {
    constructor() {
        super();
        this.persons = {};
        this.on(types_1.EvantNameEnum.Add, (data) => this.add(data));
    }
    register(person) {
        const id = Date.now();
        this.persons[id] = { ...person };
        this.emit(types_1.EvantNameEnum.Register, person);
        return id;
    }
    add(data) {
        const { personId, amount } = data;
        const person = this.persons[personId];
        if (!person) {
            throw new Error(`Пользователь с идентификатором ${personId} не найден`);
        }
        person.balance = person.balance + amount;
        this.emit(types_1.EvantNameEnum.ChangeBalance, { name: person.name, amount: person.balance });
    }
}
const bank = new Bank();
const personId = bank.register({
    name: 'Джон Доу',
    balance: 100
});
bank.emit(types_1.EvantNameEnum.Add, { personId, amount: 20 });
// Задание со звёздочкой
bank.emit(types_1.EvantNameEnum.Withdraw, { personId, amount: 20 });
