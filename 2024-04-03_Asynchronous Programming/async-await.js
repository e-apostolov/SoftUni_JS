// Fuction that returns promise

function calculateMeaningOfLife() {

    if (Math.random() < 0.5) {
        throw new Error('Failed to calculate');
    }
const result = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(42);
        }, 5000);
    });

    return result
}

// Async function declaration

async function solve() {
    
    try {
        const meaningOfLife = await calculateMeaningOfLife();
        console.log(meaningOfLife);
    } catch (err) {
        console.log(err.message);
    }
}

solve();

// Async function expression
// const solve = async function () {

// }

// Async arrow function

// const solve = async () => {

// }
