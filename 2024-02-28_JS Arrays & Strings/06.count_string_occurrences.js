function solve(sentence, word) {
   let result = sentence
    .split(' ')
    .filter(element => element === word)
    .length;

    console.log(result)
}

solve('This is a word and it also is a sentence',
'is'
)