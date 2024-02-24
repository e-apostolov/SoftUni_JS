let a = 5;
let b = 10;

console.log(a*b);

if (a > b) {
    console.log('a is greater than b');
} else if (a < b) {
    console.log('as is lower than b');
} else {
    console.log('a is equal to b');
}

function add(first, second) {
    console.log(first + second);
}

add(3, 5)


console.log('My name is ' + 'Evgeni ' + 'and I am ' + b + ' years old')

console.log(`My name is Evgeni and I am ${b} years old.`)

console.log((a / 10).toFixed(1))

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

let j = 10;
while (j < 10) {
    console.log(j);
    j--;
}