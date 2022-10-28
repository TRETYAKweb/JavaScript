import { IPerson } from "./types";
import { EvantNameEnum } from "./types";

export class EventEmitter {
    events = Object.create(null);

    constructor() {
        this
            .on(EvantNameEnum.Register, (person: IPerson) => {
            console.log(`Пользователь ${person.name} был успешно зарегистрирован`);
            })
            .on(EvantNameEnum.ChangeBalance, ({ name, amount }: { name: string, amount: number }) => {
                console.log(`На счету ${name} — ${amount}$`);
            });
    }

    on (type: EvantNameEnum, handler: any) {
        if (type in this.events) {
            this.events[type].push(handler);
        } else {
            this.events[type] = [handler];
        }

        return this;
    }

    emit<T>(type: EvantNameEnum, data: T) {

        const handlers = this.events[type];

        if (Array.isArray(handlers)) {
            handlers.forEach((handler) => handler(data));
        }

        return this;

    }
}
