// Solution 1 RexExp

function solve(input) {
    const matches = input.matchAll(/[A-Z][a-z]*/g)

    const result = Array.from(matches).map(match => match[0])
    console.log(result.join(', '))
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')
solve('HoldTheDoor')
solve('ThisIsSoAnnoyingToDo')

// Solution 2 Indexing

function solve1(input) {
    let startIndex = -1;
    const words = [];
    for (i = 0; i < input.length; i++) {
        if (input[i] <= 'Z' && input[i] >= 'A') {
            if (startIndex >= 0) {
                let word = input.substring(startIndex, i)
                words.push(word);
                startIndex = i;
            } else {
                startIndex = i;
            }
        }
    }
    words.push(input.substring(startIndex));
    console.log(words.join(', '));
}

solve1('SplitMeIfYouCanHaHaYouCantOrYouCan')
solve1('HoldTheDoor')
solve1('ThisIsSoAnnoyingToDo')