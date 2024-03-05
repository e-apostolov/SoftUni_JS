function rotation(array, index) {
    for (let i = 0; i < index; i++){
        let firstNumber = array.shift();
        array.push(firstNumber);
    }
    console.log(array.join(' '))

}

rotation([51, 47, 32, 61, 21], 2)