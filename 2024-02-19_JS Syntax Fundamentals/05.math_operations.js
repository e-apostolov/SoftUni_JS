// option 1


// function solve(number1, number2, operator) {
//     let result;

//     const expression = `${number1} ${operator} ${number2}`
//     result = eval(expression)
//     console.log(result)
// }

// solve(5, 6, '+')


// option 2

function solve(number1, number2, operator) {
    switch(operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        case '%':
            result = number1 % number2;
            break;
        case '**':
            result = number1 ** number2;
            break;
    }
    console.log(result);
}

solve(5, 6, '+')
solve(3, 5.5, '*')