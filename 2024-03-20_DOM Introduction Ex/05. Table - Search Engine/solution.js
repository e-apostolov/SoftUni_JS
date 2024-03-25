function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const trElements = document.querySelectorAll('table.container tbody tr');
      const searchFieldElement = document.getElementById('searchField');
      const searchText = searchFieldElement.value;

      searchFieldElement.value = '';

      for (const trElement of trElements) {
         const tdElements = trElement.querySelectorAll('td');
         let isSelected = false;

         trElement.classList.remove('select');

         for (const tdElement of tdElements) {
            if (tdElement.textContent.toLowerCase().includes(searchText.toLowerCase())) {
               isSelected = true;
            }           
         }

         if (isSelected) {
            trElement.className = 'select';
         }
      }
   }
}