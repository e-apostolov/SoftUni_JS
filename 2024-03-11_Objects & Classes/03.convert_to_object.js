function solve(string) {
    let result = JSON.parse(string);
    Object.keys(result)
        .forEach(key => console.log(`${key}: ${result[key]}`));
}

solve('{"name": "George", "age": 40, "town": "Sofia"}')