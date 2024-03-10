function solve(firstCharacter, secondCharacter) {

    function sortCharacters(a, b) {
        const characters = [a, b];
        characters.sort();
        return characters;
    }
    
    function getCharactersBetween(start, end) {
        let characters = [];
        for (let i=start.charCodeAt(0) + 1; i < end.charCodeAt(0); i++) {
            characters.push(String.fromCharCode(i));
        }
    return characters;
    }

    const [start, end] = sortCharacters(firstCharacter, secondCharacter);

    result = getCharactersBetween(start, end);
    console.log(result.join(' '))
}


solve('a', 'd')
solve('#', ':')