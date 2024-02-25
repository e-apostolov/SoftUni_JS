function solve(number) {
    let numberText = number.toString();
    let currentDigit = numberText[0];
    let isSame = true;
    let sum = Number(currentDigit)

    for (let i = 1; i < numberText.length; i++) {
        if (currentDigit !== numberText[i]) {
            isSame = false;
        }

        sum += Number(numberText[i])
    }
    console.log(isSame);
    console.log(sum);
}


solve(1234)