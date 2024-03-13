class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    greet(to) {
        console.log(`${this.firstName} says hello to ${to}`);
    }
}

const person = new Person('Ivo', 'Ivanov', 29);
console.log(person)

person.greet('Georgi')

