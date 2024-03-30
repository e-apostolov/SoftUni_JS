function create(words) {

   const contentElement = document.getElementById('content');

   const divElements = words
      .map(word => {
         const divElement = document.createElement('div');
         const pElement = document.createElement('p');
         pElement.textContent = word;
         divElement.appendChild(pElement);
         pElement.style.display = 'none';
         return divElement;
      });

   // Without event delegation

   divElements.forEach(divElement => {
      divElement.addEventListener('click', () => {
         const pElement = divElement.querySelector('p');
         pElement.style.display = 'block';
      })
      // contentElement.appendChild(divElement);
   })

   // contentElement.appendChild(...divElements);
   // divElements.forEach(divElement => contentElement.appendChild(divElement));

   // Document fragment
   const divElementsFragment = document.createDocumentFragment();
   divElements.forEach(divElement => divElementsFragment.appendChild(divElement));
   contentElement.appendChild(divElementsFragment);

   // With event delegation

   // contentElement.addEventListener('click', (event) => {
   //    if (event.target.tagName === 'DIV') {
   //       const pElement = e.target.querySelector('p');
   //       pElement.style.display = 'block';
   //    }
   // });
}  