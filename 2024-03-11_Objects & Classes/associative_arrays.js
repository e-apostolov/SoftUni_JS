let fullName = 'Evgeni Apostolov';
let fullName2 = 'Diana Atanasova';

let phoneBook = {
    'Ivan Ivanov': 123456,
    'Ginka Stamenova': 123444,
    [fullName]: 897456,
};

phoneBook['Georgi Gergov'] = 234567;
phoneBook[fullName2] = 987654;


console.log(phoneBook)

// For in loop

for (let record in phoneBook) {
    console.log(record)
}

for (let name in phoneBook) {
    console.log(`${name} -> ${phoneBook[name]}`)
}

// check if person is in the phoneBook
if (phoneBook['Evgeni Apostolov']) {
    console.log('Found');
} else {
    console.log('Not-Found');
}

// Sort an object

let result = Object
    .entries(phoneBook)
    .sort((a, b) => a[0].localeCompare(b[0]))