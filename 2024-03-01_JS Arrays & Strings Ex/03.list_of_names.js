// Option 1

function solve(names) {
    names
        .sort((a, b) => {
            if (a.toLowerCase() > b.toLowerCase()) {
                return 1;
            } else if (a.toLowerCase() < b.toLowerCase()) {
                return -1;
            } else {
                return 0;
            }
        })
        .forEach((name, index) => console.log(`${index + 1}.${name}`));
}

solve(["John", "Bob", "Christina", "Ema"])

// Option 2

function solve1(names) {
    names
        .sort((a, b) => a.localeCompare(b))
        .forEach((name, index) => console.log(`${index + 1}.${name}`));
}

solve1(["John", "Bob", "Christina", "Ema"])