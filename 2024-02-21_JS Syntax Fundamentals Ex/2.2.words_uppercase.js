function uppercaseString(string) {
    let words = string.match(/\w+/g);
    let finalResult = [];

    for (i = 0; i < words.length; i++) {
       finalResult.push(words[i].toUpperCase())
    }

    console.log(finalResult.join(', '))
    console.log(words)

}


uppercaseString('hello')
