function timeLogger(text) {
    console.log(`05.03.2024: ${text}}`)
}

function timeLoggerBuilder(date) {
    return function(text) {
        timeLogger(date, text);
    }
}

const logger = timeLoggerBuilder('05.03.2024')

timeLogger('Hello Evgeni')
timeLogger('Hello Diana')
timeLogger('Hello Mincho')