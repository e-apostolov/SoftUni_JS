function cooking(number, operator1, operator2, operator3, operator4, operator5) {
    let result = Number(number);
    let operations = operator1[0] + operator2[0] + operator3[0] + operator4[0] + operator5[0];

    for (let i = 0; i < operations.length; i++) {
        switch(operations[i]) {
            case 'c':
                result /= 2;
                break
            case 'd':
                result = Math.sqrt(result)
                break
            case 's':
                result += 1
                break
            case 'b':
                result *= 3
                break
            case 'f':
                result -= result * 0.2
                break
        }

        console.log(result);
    }
}

cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')