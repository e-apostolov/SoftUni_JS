// Solution 1

function solve(number) {
    for (let i = 1; i <= number; i++) {
        result = [];
        for (let i = 1; i <= number; i++){
            result.push(number)
        }
    console.log(result.join(' '))
    }
}

solve(11)

// Solution 2

function solve1(number) {
    for (let i = 1; i <= number; i++) {
        let result = number
            .toString()
            .repeat(number)
            .split('')
        console.log(result.join(' '))
    }
}

solve1(11)
