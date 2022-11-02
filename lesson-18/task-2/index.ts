/**
 * Задача 2
 * 
 * Використовуючт типізацію з першого завдання доповнити це завдання.
 * 
 * В інтерфейсах і для користувача, і для адміністратора був доданий type. 
 * Тепер їх легше розрізняти хто є хто. Логіку перевірки типу об’єкта 
 * було вилучено на окремі функції isUser і isAdmin. Функція logPerson 
 * отримала нові помилки типу.
 * 
 * Ваша задача правильно протипізувати всі функції та правильно вказати 
 * типи в файлі для того аби виправити помилки.
 * 
 * Умови:
 * - типів unknown та any не має бути в коді. 
 * 
 * Змінювати можна все.
 */
/*
Intro:
    As we introduced "type" to both User and Admin
    it's now easier to distinguish between them.
    Once object type checking logic was extracted
    into separate functions isUser and isAdmin -
    logPerson function got new type errors.
Exercise:
    Figure out how to help TypeScript understand types in
    this situation and apply necessary fixes.
*/

interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];

export function isAdmin(person: Person) {
    return person.type === 'admin';
}

export function isUser(person: Person) {
    return person.type === 'user';
}

export function logPerson(person: Person) {
    let additionalInformation: string = '';
    if (isAdmin(person)) {
        additionalInformation = (person as Admin).role;
    }
    if (isUser(person)) {
        additionalInformation = (person as User).occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log('Users:');
persons.filter(isUser).forEach(logPerson);