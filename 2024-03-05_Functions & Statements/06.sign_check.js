function solve(a, b, c) {
    array = [a, b, c];
    negativeNumbers = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negativeNumbers +=1
        }
    }
    if (negativeNumbers % 2 != 0) {
        console.log('Negative')
    } else {
        console.log('Positive')
    }
}

solve( 5, 12, -15)
solve(-6, -12, 14)
solve(-1, -2, -3)