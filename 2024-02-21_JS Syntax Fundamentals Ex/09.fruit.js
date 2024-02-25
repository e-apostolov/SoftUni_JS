function solve(fruit, grams, price) {
    let kilos = (grams / 1000).toFixed(2)
    let pricePerKilo = (price * grams / 1000).toFixed(2)
    console.log(`I need $${pricePerKilo} to buy ${kilos} kilograms ${fruit}.`)
}

solve ('apple', 1563, 2.35)