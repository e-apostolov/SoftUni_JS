function solve(password) {
    const isValidLength = password => password.length >= 6 && password.length <= 10;
    const isAlphaNumerical = password => /^[A-Za-z0-9]+$/.test(password);
    const hasTwoDigits = password => password
        .split('')
        .filter(character => Number.isInteger(Number(character)))
        .length >= 2;

    if (!isValidLength(password)) {
        console.log('Password must be between 6 and 10 characters');
    } 

    if (!isAlphaNumerical(password)) {
        console.log('Password must consist only of letters and digits');
    }

    if (!hasTwoDigits(password)) {
        console.log('Password must have at least 2 digits')
    }

    if (isAlphaNumerical(password) && isValidLength(password) && hasTwoDigits(password)) {
        console.log('Password is valid')
    }


}

solve('logIn')
solve('MyPass123')