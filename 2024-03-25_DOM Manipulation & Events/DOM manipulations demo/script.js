// Create element

const movieListElement = document.getElementById('movies');
const firstMovieElement = document.querySelector('.first-movie');

const secondMovieElement = document.createElement('li');
secondMovieElement.textContent = 'Man of Steel'

// Append element to DOM (and prepend)

movieListElement.appendChild(secondMovieElement);

// Append existing element to DOM

movieListElement.appendChild(firstMovieElement);

// Clone existing element

const firstMovieCloneElement = firstMovieElement.cloneNode(true);
firstMovieCloneElement.textContent = 'Passion of Christ';
movieListElement.append(firstMovieCloneElement);

// Add/Append element on specific place

const thirdMovieElement = document.createElement('li');
thirdMovieElement.textContent = 'Lord of the Rings';

movieListElement.insertBefore(thirdMovieElement, firstMovieElement);

const forthMovieElement = document.createElement('li');
forthMovieElement.textContent = 'Forest Gump';
thirdMovieElement.after(forthMovieElement);