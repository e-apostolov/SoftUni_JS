let text = "I am JavaScript Java developer, JavaScript is awesome!";

// RegExp

let pattern = /javaScript/ig;

// RexExp function constructor

let pattern2 = new RegExp('JavaScript', 'ig');

// test pattern
console.log(pattern.test(text));

// exec pattern

console.log(pattern2.exec(text))
console.log(pattern2.exec(text))
console.log(pattern2.exec(text))

// match string

console.log(text.match(pattern));

// matchAll

const matches = text.matchAll(pattern);

for (const match of matches) {
    console.log(match);
}