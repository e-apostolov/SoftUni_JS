const orangeElement = document.querySelector('.orange');
const greenElement = document.querySelector('.green');
const yellowElement = document.querySelector('.yellow');


// Bubble order 
orangeElement.addEventListener('click', () => {
    console.log('Orange clicked');
});

greenElement.addEventListener('click', () => {
    console.log('Green clicked')
});

yellowElement.addEventListener('click', () => {
    console.log('Yellow clicked');
});

// Capture order 
orangeElement.addEventListener('click', () => {
    console.log('Orange clicked');
}, { capture: true });

greenElement.addEventListener('click', () => {
    console.log('Green clicked')
}, { capture: true });

yellowElement.addEventListener('click', () => {
    console.log('Yellow clicked');
}, { capture: true });

// Stop propagation

// Capture order 
yellowElement.addEventListener('click', (event) => {
    event.stopPropagation()
    console.log('Yellow clicked');
});