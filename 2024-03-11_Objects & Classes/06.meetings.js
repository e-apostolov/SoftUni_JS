function solve(input) {
    const schedule = {};
    for (pair of input) {
        const [key, value] = pair.split(' ');
        if (schedule[key]) {
            console.log(`Conflict on ${key}!`);
        } else {
            schedule[key] = value;
            console.log(`Scheduled for ${key}`)
        }
    }
    for (const day in schedule) {
        console.log(`${day} -> ${schedule[day]}`)
    }
}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)