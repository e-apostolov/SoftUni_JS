function solve(input) {
    const searchWords = {}
    const words = input
        .shift()
        .split(' ')
        .forEach(word => searchWords[word] = 0 )

    for (const word of input) {
        if(searchWords.hasOwnProperty(word)) {
            searchWords[word] += 1;
        }
    }

    Object.entries(searchWords)
        .sort((a, b) => b[1] - a[1])
        .forEach(([word, occurrence]) => console.log(`${word} - ${occurrence}`))
}

solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])