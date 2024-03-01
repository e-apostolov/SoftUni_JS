function solve(numbers) {
    let oddNumbers = numbers.filter(number => number % 2 !== 0);
    let evenNumbers = numbers.filter(number => number % 2 === 0);

    let oddSum = oddNumbers.reduce((a, b) => a + b, 0);
    let evenSum = evenNumbers.reduce((a, b) => a + b, 0);

    console.log(evenSum - oddSum)
}

solve([1,2,3,4,5,6])
solve([3,5,7,9])