function addItem() {
    let inputTextElement = document.querySelector('#newItemText');
    let inputValueElement = document.querySelector('#newItemValue');
    const selectElement = document.getElementById('menu');

    const optionElement = document.createElement('option');
    optionElement.value = inputValueElement.value;
    optionElement.textContent = inputTextElement.value;

    selectElement.appendChild(optionElement);
   
    inputTextElement.value = '';
    inputValueElement.value = '';
}