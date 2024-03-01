let cars = ['BMW', 'Audi', 'Mercedes', 'Toyota', 'Honda'];

// Mutating methods
// pop - remove last element
let lastCar = cars.pop();
console.log(lastCar);
console.log(cars);

// push - add element at the end
let newLength = cars.push('Hyundai');
console.log(newLength);
console.log(cars);

// shift - remove 1st element
let firstCar = cars.shift();
console.log(firstCar);
console.log(cars);

// unshift - add 1st element
let newUnshiftedLength = cars.unshift('BMW');
console.log(newUnshiftedLength);
console.log(cars);

// splice - add or remove element by index
let deletedCars = cars.splice(2, 1);
console.log(deletedCars);
console.log(cars);

cars.splice(2, 0, 'Mercedes');
console.log(cars);

cars.splice (2, 1, 'Honda');
console.log(cars);

// reverse - reverse the order of the elements
let reversedCars = cars.reverse();
console.log(cars);
console.log(reversedCars == cars);

//Non-mutating methods
// join - join array as string

let carsString = cars.join(', ');
console.log(carsString);

// slice
let middleCars = cars.slice(1, 3);
console.log(middleCars);
console.log(cars);

let shallowCopyCars = cars.slice();
console.log(shallowCopyCars);
console.log(shallowCopyCars == cars);

let endCars = cars.slice(2);
console.log(endCars);

// includes - check if element exists in array
let isIncluded = cars.includes('Audi');
console.log(isIncluded);

// indexOf - find index of an element
let ToyotaIndex = cars.indexOf('Toyota');
console.log(ToyotaIndex);
let NonExistantIndex = cars.indexOf('BlaBla');
console.log(NonExistantIndex);

// find - finds specific element
let ToyotaElement = cars.find(car => car === 'Toyota');
console.log(ToyotaElement);

// ForEach
cars.forEach(car => console.log(car));

// Map
let numbers = [1, 2 ,3, 4, 5];
let doubleNumbers = numbers.map(number => number * 2);
console.log(doubleNumbers);

// Filter
let oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log(oddNumbers)