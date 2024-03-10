// Solution 1

function solve(a, b, c) {
    console.log(Math.min(a, b, c))
}

solve(2, 5, 3)


// Solution 2

function solve2(a, b, c) {
    const result = mathMin([a, b, c]);
    console.log(result)

    function mathMin(numbers) {
        let minNumber = Number.MAX_SAFE_INTEGER;;
    
        for (const number of numbers) {
            if (minNumber > number){
                minNumber = number;
            }
        }
    
        return minNumber
    }
}

solve2(2, 5, 3)
