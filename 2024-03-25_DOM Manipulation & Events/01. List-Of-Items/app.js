function addItem() {
    const inputElement = document.getElementById('newItemText');
    const itemsList = document.getElementById('items');

    const newItemElement = document.createElement('li');
    
    newItemElement.textContent = inputElement.value;

    itemsList.appendChild(newItemElement);

    inputElement.value = '';
}