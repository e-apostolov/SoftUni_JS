function solve (input) {
    const movies = [];

    for (const line of input) {
        const addMovieCommand = 'addMovie';

        if (line.includes('addMovie')) {
            const movieName = line.substring(addMovieCommand.length + 1)
            const movie = {
                name: movieName,
                director: '',
                date: '',
            }
            movies.push(movie)
        } else {
            let command = '';
            let secondParameter = '';
            if (line.includes('directedBy')) {
                command = 'directedBy';
                secondParameter = 'director';
            } else if (line.includes('onDate')) {
                command = 'onDate';
                secondParameter = 'date';
            }
            const [newMovieName, info] = line.split(` ${command} `);
            for (const movie of movies) {
                if (movie.name === newMovieName) {
                    movie[secondParameter] = info;
                }
            }
        }
    }
    movies
        .filter(movie => movie.director && movie.date)
        .forEach(obj => console.log(JSON.stringify(obj)))
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )