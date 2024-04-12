window.addEventListener("load", solve);

function solve() {

    const placeInputElement = document.getElementById('place');
    const actionInputElement = document.getElementById('action');
    const personInputElement = document.getElementById('person');
    const taskListElement = document.getElementById('task-list');
    taskListElement.classList.add('clean-task');

    const doneListElement = document.getElementById('done-list');

    const buttonDivElement = document.createElement('div');
    buttonDivElement.classList.add('buttons');
    const editButtonElement = document.createElement('button');
    editButtonElement.classList.add('edit');
    editButtonElement.textContent = 'Edit';
    const doneButtonElement = document.createElement('button');
    doneButtonElement.classList.add('done')
    doneButtonElement.textContent = 'Done';
    
    const placePElement = document.createElement('p');
    placePElement.textContent = `Place:${placeInputElement.value}`;
    const actionPElement = document.createElement('p');
    actionPElement.textContent = `Action:${actionInputElement.value}`;
    const personPElement = document.createElement('p');
    personPElement.textContent = `Person:${personInputElement.value}`;

    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.classList.add('delete');
    deleteButtonElement.textContent = 'Delete';

    const addButtonElement = document.getElementById('add-btn');

    addButtonElement.addEventListener('click', () => {
        if (personInputElement.value === '' || actionInputElement.value === '' || placeInputElement.value === '') {
            clearInput();
            return
        }

        const taskLiElement = document.createElement('li');
        const taskArticleElement = document.createElement('article');

        taskArticleElement.appendChild(placePElement);
        taskArticleElement.appendChild(actionPElement);
        taskArticleElement.appendChild(personPElement);

        buttonDivElement.appendChild(editButtonElement);
        buttonDivElement.appendChild(doneButtonElement);

        taskLiElement.appendChild(taskArticleElement);
        taskLiElement.appendChild(buttonDivElement);
        taskListElement.appendChild(taskLiElement);

        clearInput();


        editButtonElement.addEventListener('click', () => {

            if (placePElement && actionPElement && personPElement) {
                placeInputElement.value = placePElement.textContent.substring(6,);
                actionInputElement.value = actionPElement.textContent.substring(7,);
                personInputElement.value = personPElement.textContent.substring(7,);
            }

            taskLiElement.remove();
        })

        doneButtonElement.addEventListener('click', () => {

            buttonDivElement.remove();


            taskLiElement.appendChild(deleteButtonElement);
            doneListElement.appendChild(taskLiElement);

            deleteButtonElement.addEventListener('click', () => {
                taskLiElement.remove();
            })
        })

    })

    function clearInput() {
        placeInputElement.value = '';
        actionInputElement.value = '';
        personInputElement.value = '';
                    
    }
}

