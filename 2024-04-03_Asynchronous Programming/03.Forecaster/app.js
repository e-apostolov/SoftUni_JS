function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/forecaster'
    const locationElement = document.getElementById('location');
    const submitButton = document.getElementById('submit');
    const forecastElement = document.getElementById('forecast');
    const currentElement = document.getElementById('current');

    const weatherSymbol = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
        'Degrees': '°',
    }

    submitButton.addEventListener('click', () => {
        fetch(`${baseUrl}/locations`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const { code } = data.find(location => location.name === locationElement.value)

                return Promise.all([
                    fetch(`${baseUrl}/today/${code}`),
                    fetch(`${baseUrl}/upcoming/${code}`)
                ]);
            })
            .then(responses => Promise.all(responses.map(res => res.json())))
            .then(([today, upcoming]) => {
                forecastElement.style.display = 'block';

                const symbolSpanElement = document.createElement('span');
                symbolSpanElement.classList.add('condition');
                symbolSpanElement.classList.add('symbol');
                symbolSpanElement.textContent = weatherSymbol[today.forecast.condition];

                const anotherSpan = document.createElement('span');
                anotherSpan.innerHTML = `
                    <span class="forecast-data">${today.name}</span>
                    <span class="forecast-data">${today.forecast.low}/${today.forecast.high}</span>
                    <span class="forecast-data">${today.forecast.condition}</span>
                `;

                const forecastsElement = document.createElement('div');
                forecastsElement.classList.add('forecasts');
                forecastsElement.appendChild(symbolSpanElement);
                forecastsElement.appendChild(anotherSpan);
                currentElement.appendChild(forecastsElement);
            })
    })
}

attachEvents();