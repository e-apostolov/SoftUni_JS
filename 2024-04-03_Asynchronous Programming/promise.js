const weddingPromise = new Promise((resolve, reject) => {
    if (Math.random() < 0.3) {
        reject('Sorry, It\'s me!');
        return
    }
    setTimeout(() => {
        resolve('Just Married')
    }, 5000);
});


weddingPromise
    .then((message) => {
        console.log(message)
})  
    .catch((message) => {
        console.log(message);
})
    .finally(() => {
        console.log('Love always wins!')
    })

// Always rejecting promise

const rejectingPromise = Promise.reject('Sorry next time')
console.log(rejectingPromise)
rejectingPromise.catch((message) => console.log(message))

// Multiple parallel promises
const createTimoutPromise = function(message, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, time);
    })
}

const groupPromise = Promise.all([
    Promise.resolve('First promise'),
    createTimoutPromise('Second promise', 3000),
    createTimoutPromise('Third Promise', 1000),
])

groupPromise
    .then((values) => {
        console.log(values)
})
    .catch((error) => {
        console.log(error)
    });