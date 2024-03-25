function search() {
   const townListElement = document.getElementById('towns');
   const searchTextElement = document.getElementById('searchText');
   const resultElement = document.getElementById('result');

   const searchText = searchTextElement.value;
   let matchCount = 0;
   const townElements = Array.from(townListElement.children)
   
   for (const townElement of townElements) {
      if(townElement.textContent.toLowerCase().includes(searchText.toLowerCase())) {
         townElement.style.textDecoration = 'underline';
         townElement.style.fontWeight = 'bold';
         matchCount++;
      }
   }
   resultElement.textContent = `${matchCount} matches found`
}
