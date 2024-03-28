const countElement = document.getElementById('count');
const decrementButtonElement = document.getElementById('decrement-button');
const resetButtonElement = document.getElementById('reset-button');

const resetButtonElement2 = document.getElementById('reset-button2')

// Event handling using HTLM attributes

function onIncrement() {
    countElement.textContent = Number(countElement.textContent) + 1;
}

// Event handling using DOM element properties

decrementButtonElement.onclick = function() {
    countElement.textContent = Number(countElement.textContent) - 1;
}


// Event handling using DOM event handler
resetButtonElement.addEventListener('click', () => {
    countElement.textContent = 0
});

// Input event handling

const inputNumberElement = document.getElementById('number');
inputNumberElement.addEventListener('input', (event) => {
    countElement.textContent = event.target.value;
});

// Remove event listener after 10 secs

const eventListener = () => {
    countElement.textContent = 0;
};
resetButtonElement2.addEventListener('click', eventListener);

setTimeout(() => {
    resetButtonElement2.removeEventListener('click', eventListener)
}, 10000)

// Multiple listeners
resetButtonElement2.addEventListener('click', (event) => {
    inputNumberElement.value = ''
});






