const textInputElement = document.getElementById('uName');
console.dir(textInputElement);
textInputElement.value = 'Evgeni'

const fancyInputElements = document.getElementsByClassName('fancy-input');
console.log(fancyInputElements)

const firstInputTextElement = document.querySelector('.fancy-input[type=text');
console.log(firstInputTextElement);