function extractText() {
    const intemsElement = document.getElementById('items');
    const textAreaElement = document.getElementById('result');

    textAreaElement.value = intemsElement.textContent;
}