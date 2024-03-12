function solve(input) {
    const addressBook = {};
    for (const pair of input) {
        const [name, address] = pair.split(':')
        addressBook[name] = address;
    }

    const sortedAddressBook = Object
        .entries(addressBook)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([name, address]) -> console.log(`${name} => ${address}`));

}

solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])