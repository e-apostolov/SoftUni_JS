// Define function in object

const cat = {
    name: 'Roshko',
    breed: 'Angora',
    age: 9,
    grades: [5, 6, 5, 6, 6],
    owner: {
        name: 'Evgeni',
        age: 35,
    },

    // Function expression value
    makeSound: function () {
        console.log('Meow...');
    },
    
    // Arrow function
    sleep : () => console.log('zzzzzz...'),
}

cat.makeSound();
cat.sleep();

// Add method dynamically

cat.eat = function () {
    console.log('omnomnom...')
}

cat.eat();

// Method notation syntax

const dog = {
    name: 'Sharo',
    breed: 'German Shepherd',
    makeSound() {
        console.log('Woof...')
    },
}

dog.makeSound();

// Get all property names of an object

const propertyNames = Object.keys(cat);
console.log(propertyNames);

// Get all property values of an object

const propertyValues = Object.values(cat);
console.log(propertyValues);

// Get object key value pairs

const entries = Object.entries({
    name: 'Evgeni',
    age: 20,
})
console.log(entries)