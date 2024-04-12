const baseUrl = 'http://localhost:3030/jsonstore/tasks';

const loadButtonElement = document.getElementById('load-vacations');
const addButtonElement = document.getElementById('add-vacation');
const editButtonElement = document.getElementById('edit-vacation');

const confirmedVacationsDivList = document.getElementById('list')
const nameInputElement = document.getElementById('name');
const daysInputElement = document.getElementById('num-days');
const dateInputElement = document.getElementById('from-date');

let currentID;
loadButtonElement.addEventListener('click', async () => {
    loadVacations();
})

addButtonElement.addEventListener('click', async () => {
    const name = nameInputElement.value;
    const days = daysInputElement.value;
    const date = dateInputElement.value;

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            name,
            days,
            date,
        }),
    });

    loadVacations();
    clearInput();
})

editButtonElement.addEventListener('click', async () => {
    const name = nameInputElement.value;
    const days = daysInputElement.value;
    const date = dateInputElement.value;

    const response = await fetch(`${baseUrl}/${currentID}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            name,
            days,
            date,
        })
    })

    loadVacations();
    clearInput();

    editButtonElement.setAttribute('disabled', 'disabled');
    addButtonElement.removeAttribute('disabled')
})

async function loadVacations() {
    const response = await fetch(baseUrl);
    const vacations = await response.json();

    confirmedVacationsDivList.innerHTML = '';

    for (const vacation of Object.values(vacations)) {
        confirmedVacationsDivList.appendChild(createVacationContainer(vacation));
    }
}

function createVacationContainer(vacation) {
    const travelerName = vacation.name;
    const travelDays = vacation.days;
    const travelDate = vacation.date;

    const divContainer = document.createElement('div');
    divContainer.classList.add('container');

    const nameH2Element = document.createElement('h2');
    nameH2Element.textContent = travelerName;

    const dateH3Element = document.createElement('h3');
    dateH3Element.textContent = travelDate;

    const daysH3Element = document.createElement('h3');
    daysH3Element.textContent = travelDays;

    const changeButtonElement = document.createElement('button');
    changeButtonElement.classList.add('change-btn');
    changeButtonElement.textContent = 'Change';

    changeButtonElement.addEventListener('click', () => {
        nameInputElement.value = travelerName;
        daysInputElement.value = travelDays;
        dateInputElement.value = travelDate;

        divContainer.remove();
        addButtonElement.setAttribute('disabled', 'disabled');
        editButtonElement.removeAttribute('disabled');
        currentID = vacation._id;
    })

    const doneButtonElement = document.createElement('button');
    doneButtonElement.classList.add('done-btn');
    doneButtonElement.textContent = 'Done';

    doneButtonElement.addEventListener('click', async () => {
        response = await fetch(`${baseUrl}/${vacation._id}`, {
            method: 'DELETE',
        })
        divContainer.remove();
    })

    divContainer.appendChild(nameH2Element);
    divContainer.appendChild(dateH3Element);
    divContainer.appendChild(daysH3Element);
    divContainer.appendChild(changeButtonElement);
    divContainer.appendChild(doneButtonElement);

    return divContainer;
}

function clearInput() {
    nameInputElement.value = '';
    daysInputElement.value = '';
    dateInputElement.value = '';
}
