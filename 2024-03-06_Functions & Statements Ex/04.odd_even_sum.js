function solve(number) {

    function calculateDigitSum(number, filter) {
        const filteredDigits = number
            .toString()
            .split('')
            .map(digit => Number(digit))
            .filter(filter)

        const sum = filteredDigits.reduce((acc, digit) => acc + digit, 0);
        return sum;
    }

    const evensum = calculateDigitSum(number, x => x % 2 === 0);
    const oddsum = calculateDigitSum(number, x => x % 2 !== 0);

    console.log(`Odd sum = ${oddsum}, Even sum = ${evensum}`)
}

solve(1000435)