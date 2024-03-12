function solve(text) {
   const phoneBook = {}
    for (pairs of text) {
        const [key, value] = pairs.split(' ')
        phoneBook[key] = value;
    }

    for (const name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`)
    }
}

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])