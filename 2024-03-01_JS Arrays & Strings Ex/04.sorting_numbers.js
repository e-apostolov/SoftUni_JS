function solve(numbers) {
    numbers.sort((a, b) => a - b)
    result = []
    while (numbers.length > 0) {
        let firstNumber = numbers.shift();
        let lastNumber = numbers.pop();
        
        result.push(firstNumber);

        if (lastNumber) {
            result.push(lastNumber);
        }
    }
    return result
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])