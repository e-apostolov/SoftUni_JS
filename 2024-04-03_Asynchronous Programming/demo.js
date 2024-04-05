// Async programming with callback

function delayStart(callback) {
    setTimeout (() => {
        callback();
    }, 2000);
}

console.log('start');
delayStart(() => console.log('delayed start'));
console.log('finish');