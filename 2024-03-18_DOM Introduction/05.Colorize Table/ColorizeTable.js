function colorize() {
    const evenRowElements = document.querySelectorAll('table tr:nth-child(2n)');

    for (let el of evenRowElements)
        el.style.backgroundColor ='teal';
}