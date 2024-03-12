// Create an object

let person = { name: 'Evgeni', age: 20 };

// create an object with non-stadard identifier

let person2 = { 'full-name': 'Ivan Ivanov'};
let person3 = { 'last name': 'Ivan Ivanov'};

// accessing object attributes

console.log(person.name);
console.log(person2['full-name']);

// create an empty object and dynamically add values

let animal = {};
animal.name = 'Roshko';
animal['min-weight'] = 1.5;

// Add dynamic name property

let propName = 'type';
animal[propName] = 'Cat';

// Add dynamic name property in the literal

const dynamicPropName = 'fullName';
const person4 = {[dynamicPropName]: 'Ivan Ivanov'};

// object literal with shorthand syntax

const shortPersonInfo = {
    firstName,
    lastName,
    age,
}


console.log(person)
console.log(animal)

// object destructuring assignments

let person5 = { name: 'Diana', age: '34' }
const { age, name } = person4;

const {lastName: surName, ...restPersonalInfo} = shortPersonInfo;
console.log(surName);
console.log(restPersonalInfo);