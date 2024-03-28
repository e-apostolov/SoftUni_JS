function addItem() {
    const inputElement = document.getElementById('newItemText');
    const itemsList = document.getElementById('items');

    const newInpuItemElement = document.createElement('li');
    newInpuItemElement.textContent = inputElement.value;

    const deleteLinkElement = document.createElement('a');
    deleteLinkElement.textContent = '[Delete]';
    deleteLinkElement.href = '#';

    deleteLinkElement.addEventListener('click', () => {
        newInpuItemElement.remove();
    });

    newInpuItemElement.appendChild(deleteLinkElement)

    itemsList.appendChild(newInpuItemElement);

    inputElement.value = '';
}