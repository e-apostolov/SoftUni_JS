function solve(firstName, lastName, hairColor) {
    let result = {
        name: firstName,
        lastName,
        hairColor,
    }
    console.log(JSON.stringify(result))
}

solve('George', 'Jones', 'Brown')