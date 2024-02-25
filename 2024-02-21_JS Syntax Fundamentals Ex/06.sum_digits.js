function sumDigits (number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10
        number = Math.floor(number / 10)
    }
    console.log(sum)
}

function sumDigitsWithStrings (number) {
    let textNumber = number.toString();
    let sum = 0;

    for (let i = 0; i < textNumber.length; i++) {
        sum += Number(textNumber[i])
    }
    console.log(sum)
}


sumDigits(245678)
sumDigits(97561)
sumDigits(543)

sumDigitsWithStrings(245678)
sumDigitsWithStrings(97561)
sumDigitsWithStrings(543)
