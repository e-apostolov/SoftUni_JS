function executeOperation(operation, operandA, operandB) {
    const result = operation(operandA, operandB);
    console.log(result)
}

function sum(a, b) {
    return a + b;
}

// Pass function by reference
executeOperation(sum, 1, 2);


// Pass function expression body as argument

executeOperation(function(a , b) {
    return a / b
}, 10, 2);

// Pass arrow function body as argument

executeOperation((a, b) => a * b, 2, 5);