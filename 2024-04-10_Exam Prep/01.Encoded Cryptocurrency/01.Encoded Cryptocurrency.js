function solve(input) {

    let encodedString = input.shift()

    let line = input.shift()
    let decodedString = '';

    while (line !== 'Buy') {
        const [command, substring, replacement] = line.split('?');

        switch (command) {
            case 'TakeEven':
                encodedString = encodedString
                    .split('')
                    .filter((char, i) => i % 2 == 0)
                    .join('');
                console.log(encodedString)
                break;

            case 'ChangeAll':
                while(encodedString.includes(substring)) {
                    encodedString = encodedString.replace(substring, replacement)
                }
                console.log(encodedString)
                break;

            case 'Reverse':
                if (encodedString.includes(substring)) {
                    encodedString = encodedString.replace(substring, '');
                    encodedString += substring.split('').reverse().join('');
                    console.log(encodedString);
                } else {
                    console.log('error');
                }
        }
        line = input.shift();
    }

    console.log(`The cryptocurrency is: ${encodedString}`)
}

solve(["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs",

"TakeEven",

"Reverse?!nzahc",

"ChangeAll?m?g",

"Reverse?adshk",

"ChangeAll?z?i",

"Buy"])