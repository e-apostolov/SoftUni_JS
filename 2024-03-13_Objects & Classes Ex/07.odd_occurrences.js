function solve(input) {
    const words = input.split(' ');
    const outputResult = {};

    for (const word of words) {
        if(!outputResult.hasOwnProperty(word.toLowerCase())) {
            outputResult[word.toLowerCase()] = 0;
        }

        outputResult[word.toLowerCase()] += 1;
    }

    result = [];
    for (const word in outputResult) {
        if(outputResult[word] % 2 !== 0) {
            result.push(word)
        }
    }
    console.log(result.join(' '))
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')