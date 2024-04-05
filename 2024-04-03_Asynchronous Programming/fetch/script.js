const url = 'https://swapi.dev/api';

// Promise chaining

fetch(`${url}/people/1`)
    .then((response) => response.json())
    .then ((data) => console.log(data))
    .catch((error) => console.log('Something went wrong'));

fetch('http://localhost:3030/jsonstore/books')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

// Create book

// fetch('http://localhost:3030/jsonstore/books', {
//     method: 'POST',
//     headers: {
//         'content-type': 'application/json'
//     },
//     body: JSON.stringify({
//         title: 'Chronicles of Narnia',
//         author: 'C.S. Lewis',
//     })
// })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

// Edit book

// fetch('http://localhost:3030/jsonstore/books/50aa2cfb-4917-4942-a024-b60ead40a5ac', {
//     method: 'PUT',
//     headers: {
//         'content-type': 'application/json',
//     },
//     body: JSON.stringify({
//         "title": "Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
//         "author": "C.S. Lewis",
//         "_id": "50aa2cfb-4917-4942-a024-b60ead40a5ac"
//     })
// })

// Delete book
fetch('http://localhost:3030/jsonstore/books/23f4822c-11f9-47bc-b2bc-9e0498aed0f5', {
    method: 'DELETE',
})
    .fetch(res => console.log(res))
    .catch(err => console.log(err));