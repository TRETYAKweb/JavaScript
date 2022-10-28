// Для запуска файла использовать команду ts-node src/index.ts находясь в папке homeworks/2
import { EventEmitter } from './emitter';
import { IPerson } from './types';
import { IPaymentData } from './types';
import { EvantNameEnum } from './types';
import { ITransactionInfo } from './types';

class Bank extends EventEmitter {

    persons: {[key: number]:IPerson } = {};

    constructor() {
        super();
        this.on(EvantNameEnum.Add, (data: IPaymentData) => this.add(data));
    }

    register (person: IPerson) {
        const id = Date.now();

        this.persons[id] = { ...person };
        this.emit<IPerson>(EvantNameEnum.Register, person);

        return id;
    }

    private add (data: IPaymentData) {
        const { personId, amount } = data;
        const person = this.persons[personId];

        if (!person) {
            throw new Error(`Пользователь с идентификатором ${personId} не найден`);
        }

        person.balance = person.balance + amount;

        this.emit<ITransactionInfo>(EvantNameEnum.ChangeBalance, { name: person.name, amount: person.balance});
    }
}

const bank = new Bank();

const personId = bank.register({
    name: 'Джон Доу',
    balance: 100
});

bank.emit<IPaymentData>(EvantNameEnum.Add, { personId, amount: 20 });

// Задание со звёздочкой
bank.emit(EvantNameEnum.Withdraw, { personId, amount: 20 });
