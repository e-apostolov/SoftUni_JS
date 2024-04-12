const baseUrl = `http://localhost:3030/jsonstore/gifts`

const giftListDivElement = document.getElementById('gift-list');
const loadButtonElement = document.getElementById('load-presents');
const addButtonElement = document.getElementById('add-present');
const editButtonElemenet = document.getElementById('edit-present')

const inputGiftElemenet = document.getElementById('gift');
const inputForElement = document.getElementById('for');
const inputPriceElement = document.getElementById('price');

let currentElementID;


loadButtonElement.addEventListener('click', async () => {
    loadPresents();
})

addButtonElement.addEventListener('click', async () => {
    const gift = inputGiftElemenet.value;
    const giftFor = inputForElement.value;
    const price = inputPriceElement.value;

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            gift,
            for: giftFor,
            price,
        })
    })

    clearInputData();
    loadPresents();
})

editButtonElemenet.addEventListener('click', async() => {
    const gift = inputGiftElemenet.value;
    const giftFor = inputForElement.value;
    const price = inputPriceElement.value;
    response = await fetch(`${baseUrl}/${currentElementID}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',

        },
        body: JSON.stringify({
            _id: currentElementID,
            gift,
            for: giftFor,
            price,
        })
    })

    editButtonElemenet.setAttribute('disabled', 'disabled');
    addButtonElement.removeAttribute('disabled');
    currentElementID = null;

    clearInputData();

    loadPresents();
})

function createPresentDivElemenet(present) {
    presentDivElement = document.createElement('div');
    presentDivElement.classList.add('gift-sock');
    contentDivElement = document.createElement('div');
    contentDivElement.classList.add('content');

    giftPElement = document.createElement('p');
    giftPElement.textContent = present.gift;

    forPElemenet = document.createElement('p');
    forPElemenet.textContent = present.for;

    pricePElement = document.createElement('p');
    pricePElement.textContent = present.price;

    buttonsContainerDivElement = document.createElement('div');
    buttonsContainerDivElement.classList.add('buttons-container');

    changeButtonElement = document.createElement('button');
    changeButtonElement.classList.add('change-btn');
    changeButtonElement.textContent = 'Change';
    changeButtonElement.addEventListener('click', () => {
        inputGiftElemenet.value = present.gift;
        inputForElement.value = present.for;
        inputPriceElement.value = present.price;

        presentDivElement.remove();

        editButtonElemenet.removeAttribute('disabled');
        addButtonElement.setAttribute('disabled', 'disabled');
        currentElementID = present._id;
    })

    deleteButtonElement = document.createElement('button');
    deleteButtonElement.classList.add('delete-btn');
    deleteButtonElement.textContent = 'Delete';
    deleteButtonElement.addEventListener('click', async () => {
        await fetch(`${baseUrl}/${present._id}`, {
            method: 'DELETE'
        })
        presentDivElement.remove();
    })

    buttonsContainerDivElement.appendChild(changeButtonElement);
    buttonsContainerDivElement.appendChild(deleteButtonElement);

    contentDivElement.appendChild(giftPElement);
    contentDivElement.appendChild(forPElemenet);
    contentDivElement.appendChild(pricePElement);

    presentDivElement.appendChild(contentDivElement);
    presentDivElement.appendChild(buttonsContainerDivElement);

    return presentDivElement;
}

async function loadPresents() {
    const response = await fetch(baseUrl);
    const presents = await response.json();

    giftListDivElement.innerHTML = '';

    for (const present of Object.values(presents)) {
        giftListDivElement.appendChild(createPresentDivElemenet(present));
    }
}

function clearInputData() {
    inputGiftElemenet.value = '';
    inputForElement.value = '';
    inputPriceElement.value = '';
}