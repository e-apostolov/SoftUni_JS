// Option 1

// function solve(first, second, third) {
//     const largestNUmber = Math.max(first, second, third);

//     console.log (`The largest number is ${largestNUmber}.`);
// }

// solve(5, -3, 16);

// Option 2

function findLargestNumber(number1, number2, number3) {
    let largestNUmber;

    if (number1 > number2 && number1 > number3) {
        largestNUmber = number1;
    } else if (number2 >= number1 && number2 > number3) {
        largestNUmber = number2;
    } else {
        largestNUmber = number3
    }

    console.log(`The largest number is ${largestNUmber}.`);
}

findLargestNumber(-3, -5, -22.5)