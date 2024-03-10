function solve(numbers) {

    function isPalindrome(number) {
        const forwardNumber = number.toString()
        const backwardNumber = forwardNumber.split('').reverse().join('');
        return forwardNumber === backwardNumber;
    }

    for (const number of numbers) {
        console.log(isPalindrome(number))
    }
    
}

solve([123,323,421,121])