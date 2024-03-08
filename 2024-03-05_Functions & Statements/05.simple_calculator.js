function solve(a, b, operator) {
    result = ''
    switch (operator) {
        case 'multiply':
            result = a * b;
            break
        case 'divide':
            result = a / b;
            break
        case 'add':
            result = a + b;
            break
        case 'subtract':
            result = a - b;
            break
    }
    console.log(result)
}

solve(5, 5, 'multiply')

// Solution 2 with returning function


function solve1(a, b, operator) {
    const operation = getOperation(operator);

    const result = operation(a, b)
    console.log(result);

    function getOperation(operator) {
        switch(operator) {
            case 'multiply':
                return (a, b) => a * b;
            case 'divide':
                return (a, b) => a / b;
            case 'add':
                return (a, b) => a + b;
            case 'subtract':
                return (a, b) => a - b;
        }
    }
}

solve1(5, 5, 'multiply')