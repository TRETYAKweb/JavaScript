/**
 * Задача 1 
 * 
 * У вас є 2 типи користувачів - Admin та User. 
 * В массиві persons можуть бути як обʼєкти, які описують звичайних користувачів, 
 * так і обʼєкти які описують адмінів.
 * Ваша задача протипізувати функцію logPerson та правильно вказати 
 * типи в файлі для того аби виправити поомилки.
 * 
 * Умови:
 * - типів unknown та any не має бути в коді.
 * - виправле типи в цьому файлі таким чином щоб функція logPerson працювала коректно.
 * 
 * Змінювати можна все.
 */

interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

console.log(persons[2])

export function logPerson(user: User | Admin) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);
