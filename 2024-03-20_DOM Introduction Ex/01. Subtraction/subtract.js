// function subtract() {
//     const firstNumberElement = Number(document.getElementById('firstNumber').value);
//     const secondNumberElement = Number(document.getElementById('secondNumber').value);
//     const resultElement = document.getElementById('result');

//     resultElement.textContent = firstNumberElement - secondNumberElement;

// }


function subtract() {
    const firstNumberElement = document.getElementById('firstNumber');
    const secondNumberElement = document.getElementById('secondNumber');
    const resultElement = document.getElementById('result');

    firstNumber = Number(firstNumberElement.value);
    secondNumber = Number(secondNumberElement.value);

    resultElement.textContent = firstNumber - secondNumber;

}


