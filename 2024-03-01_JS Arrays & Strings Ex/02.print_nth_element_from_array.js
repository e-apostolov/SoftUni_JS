function solve(array, number) {
    let updatedArray = [];
    for (let i = 0; i < array.length; i += number){
        updatedArray.push(array[i]);
    }

    return updatedArray;
}

solve(['5', '20', '31', '4', '20'], 2)