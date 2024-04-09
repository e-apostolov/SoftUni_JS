const baseUrl = 'http://localhost:3030/jsonstore/tasks';

const loadButtonElement = document.getElementById('load-meals');
const addButtonElement = document.getElementById('add-meal');
const editButtonElement = document.getElementById('edit-meal');
const mealListElement = document.getElementById('list');

const foodInputElement = document.getElementById('food');
const timeInputElement = document.getElementById('time');
const caloriesInputElement = document.getElementById('calories');

let currentMealId = null;
const loadMeals = async () => {
    
    const response = await fetch(baseUrl);
    const data = await response.json();

    mealListElement.innerHTML = '';

    for (const meal of Object.values(data)) {
        const changeButtonElement = document.createElement('button');
        changeButtonElement.textContent = 'Change';
        changeButtonElement.classList.add('change-meal');

        const deleteButtonElement = document.createElement('button');
        deleteButtonElement.textContent = 'Delete';
        deleteButtonElement.classList.add('delete-meal');

        const buttonContainerElement = document.createElement('div');
        buttonContainerElement.id = 'meal-buttons';
        buttonContainerElement.appendChild(changeButtonElement);
        buttonContainerElement.appendChild(deleteButtonElement);

        const foodH2Element = document.createElement('h2');
        foodH2Element.textContent = meal.food;
        const timeH3Element = document.createElement('h3');
        timeH3Element.textContent = meal.time;
        const caloriesH3Element = document.createElement('h3');
        caloriesH3Element.textContent = meal.calories;

        const mealElement = document.createElement('div');
        mealElement.classList.add('meal');
        mealElement.appendChild(foodH2Element);
        mealElement.appendChild(timeH3Element);
        mealElement.appendChild(caloriesH3Element);
        mealElement.appendChild(buttonContainerElement);

        mealListElement.appendChild(mealElement);

        changeButtonElement.addEventListener('click', () => {
            currentMealId = meal._id;

            foodInputElement.value = meal.food;
            timeInputElement.value = meal.time;
            caloriesInputElement.value = meal.calories;

            editButtonElement.removeAttribute('disabled');
            addButtonElement.setAttribute('disabled', 'disabled');
            mealElement.remove();
        });

        deleteButtonElement.addEventListener('click', async () => {
            await fetch(`${baseUrl}/${meal._id}`, {
                method: 'DELETE'
            });
            mealElement.remove()
        });
 
    }
}

loadButtonElement.addEventListener('click', loadMeals);

editButtonElement.addEventListener('click', async () => {
    const newMeal = getInputData();

    const response = await fetch(`${baseUrl}/${currentMealId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',

        },
        body: JSON.stringify({
            _id: currentMealId,
            food: newMeal.food,
            time: newMeal.time,
            calories: newMeal.calories,
        })
    })

    if (!response.ok) {
        return;
    }

    editButtonElement.setAttribute('disabled', 'disabled');
    addButtonElement.removeAttribute('disabled');
    currentMealId = null;

    clearInputData();

    loadMeals();
});

addButtonElement.addEventListener('click', async () => {
    const newMeal = getInputData();

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newMeal),
    });

    if (!response.ok) {
        return;
    }

    clearInputData();

    await loadMeals();
});

function getInputData() {
    const food = foodInputElement.value;
    const time = timeInputElement.value;
    const calories = caloriesInputElement.value;

    return { food, time, calories }
}

function clearInputData() {
    foodInputElement.value = '';
    timeInputElement.value = '';
    caloriesInputElement.value = '';
}

