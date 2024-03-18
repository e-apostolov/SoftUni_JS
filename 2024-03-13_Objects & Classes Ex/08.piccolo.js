// function solve(input) {
//     let parking = [];

//     for (const row of input) {
//         let [action, number] = row.split(', ')
//         if (action === 'IN') {
//             if (!parking.includes(number)) {
//                 parking.push(number)
//             }
//         } else if (action === 'OUT') {
//             parking = parking.filter(num => num !== number)
//         }
//     }
//     if (parking.length < 1) {
//         console.log('Parking Lot is Empty')
//     }
//     sortedResult = parking
//         .sort((a, b) => a.localeCompare(b))
//         .forEach(car => console.log(car));
//     }

function solve(input) {
    const parkingLot = {};

    for (const row of input) {
        const[direction, carNumber] = row.split(', ');

        direction === 'IN' 
            ? parkingLot[carNumber] = true
            : delete parkingLot[carNumber]
    }

    Object
        .keys(parkingLot)
        .sort((a, b) => a.localeCompare(b))
        .forEach(car => console.log(car))
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
)