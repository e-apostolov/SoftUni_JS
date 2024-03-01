// indexOf

let text = "I am JavaScript Java developer";
let indexOfJava = text.indexOf('Java');
console.log(indexOfJava);

// lastIndexOf

let lastIndexOfJava = text.lastIndexOf('Java');
console.log(lastIndexOfJava);

// substring

let theBestLanguage = text.substring(indexOfJava, 15);
console.log(theBestLanguage);

// replace

let csharpDevText = text.replace('JavaScript', "C#");
console.log(csharpDevText);

// split

let words = text.split(' ');
console.log(words);

// incluides

console.log(text.includes('JavaScript'));

// repeat

console.log('Tro' + 'lo'.repeat(3));

// startWith/endWidth

console.log(text.startsWith('I am'));

// padStart/padEnd

console.log('10'.padStart(5, 0));

// reverse string

let reversedString = text
    .split('')
    .reverse()
    .join('');

console.log(reversedString);
