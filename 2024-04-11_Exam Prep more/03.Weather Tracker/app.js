const baseUrl = 'http://localhost:3030/jsonstore/tasks';
const loadButtonElement = document.getElementById('load-history');
const addButtonElement = document.getElementById('add-weather');
const editButtonElement = document.getElementById('edit-weather');

const locationInputElement = document.getElementById('location');
const dateInputElement = document.getElementById('date');
const temperatureInputElement = document.getElementById('temperature')

const historyListDivElement = document.getElementById('list');

let currentID;

loadButtonElement.addEventListener('click', async () => {
    loadElements();
})

addButtonElement.addEventListener('click', async () => {
    const location = locationInputElement.value;
    const date = dateInputElement.value;
    const temperature = temperatureInputElement.value;

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            location,
            temperature,
            date,
        })
    })
    loadElements();
    clearInput();
});

editButtonElement.addEventListener('click', async() => {
    const location = locationInputElement.value;
    const date = dateInputElement.value;
    const temperature = temperatureInputElement.value;

    response = await fetch(`${baseUrl}/${currentID}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            location,
            date,
            temperature,
        }),
    })

    loadElements();
    clearInput();
})

async function loadElements () {
    const response = await fetch(baseUrl);
    const historyList = await response.json();

    historyListDivElement.innerHTML = '';
    
    for (const historyElement of Object.values(historyList)) {
        historyListDivElement.appendChild(createHistoryListElement(historyElement));        
    }

}

function createHistoryListElement(historyElement) {
    const location = historyElement.location;
    const temperature = historyElement.temperature;
    const date = historyElement.date;
    
    const divContainerElement = document.createElement('div');
    divContainerElement.classList.add('container')

    const locationH2Element = document.createElement('h2');
    locationH2Element.textContent = location;
    const dateH3Element = document.createElement('h3');
    dateH3Element.textContent = date;
    const temperatureH3Element = document.createElement('h3');
    temperatureH3Element.textContent = temperature;

    const buttonsContainerDivElement = document.createElement('div');
    buttonsContainerDivElement.classList.add('buttons-container');

    const changeButtonElement = document.createElement('button');
    changeButtonElement.classList.add('change-btn');
    changeButtonElement.textContent = 'Change';
    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.classList.add('delete-btn');
    deleteButtonElement.textContent = 'Delete';

    buttonsContainerDivElement.appendChild(changeButtonElement);
    buttonsContainerDivElement.appendChild(deleteButtonElement);

    divContainerElement.appendChild(locationH2Element);
    divContainerElement.appendChild(dateH3Element);
    divContainerElement.appendChild(temperatureH3Element);
    divContainerElement.appendChild(buttonsContainerDivElement);

    changeButtonElement.addEventListener('click', () => {
        currentID = historyElement._id;
        locationInputElement.value = location;
        dateInputElement.value = date;
        temperatureInputElement.value = temperature;

        editButtonElement.removeAttribute('disabled');
        addButtonElement.setAttribute('disabled', 'disabled');

        divContainerElement.remove();

    })

    deleteButtonElement.addEventListener('click', async() => {
        response = await fetch(`${baseUrl}/${historyElement._id}`, {
            method: 'DELETE',
        })
        divContainerElement.remove();

    })

    return divContainerElement;
}

function clearInput() {
    locationInputElement.value = '';
    dateInputElement.value = '';
    temperatureInputElement.value = '';
}