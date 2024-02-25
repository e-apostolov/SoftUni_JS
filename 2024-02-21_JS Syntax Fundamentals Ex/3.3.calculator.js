// function solve(number1, operator, number2) {
//     let result = 0;
//     switch (operator) {
//         case '+':
//             result = number1 + number2;
//             break
//         case '-':
//             result = number1 - number2;
//             break
//         case '/':
//             result = number1 / number2;
//             break
//         case '*':
//             result = number1 * number2;
//             break
//     }
//     console.log(result.toFixed(2))
// }

function solve(number1, operator, number2) {
    let result = 0;
    const expression = number1 + operator + number2;

    result = eval(expression)
    console.log(result.toFixed(2))
}

solve(25.5,
    '-',
    3)