function circleArea(input) {
    let radius
    if (typeof input != 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`) 
        return

    } else {
        radius = (Math.PI * input ** 2).toFixed(2)
    }
    console.log(radius)
}

circleArea(5)