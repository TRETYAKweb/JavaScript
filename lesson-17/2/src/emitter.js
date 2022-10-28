"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventEmitter = void 0;
const types_1 = require("./types");
class EventEmitter {
    constructor() {
        this.events = Object.create(null);
        this
            .on(types_1.EvantNameEnum.Register, (person) => {
            console.log(`Пользователь ${person.name} был успешно зарегистрирован`);
        })
            .on(types_1.EvantNameEnum.ChangeBalance, ({ name, amount }) => {
            console.log(`На счету ${name} — ${amount}$`);
        });
    }
    on(type, handler) {
        if (type in this.events) {
            this.events[type].push(handler);
        }
        else {
            this.events[type] = [handler];
        }
        return this;
    }
    emit(type, data) {
        const handlers = this.events[type];
        if (Array.isArray(handlers)) {
            handlers.forEach((handler) => handler(data));
        }
        return this;
    }
}
exports.EventEmitter = EventEmitter;
