let person = {
    name: 'Pesho',
    age: 20,
}

// Convert JS Object to JSON

const data = JSON.stringify(person);
console.log(data);

// Convert JSON to JS object
const originalObject = JSON.parse(data);
console.log(originalObject);