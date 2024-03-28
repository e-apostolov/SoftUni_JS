function solve() {
   const addProductButtonElements = document.querySelectorAll('button.add-product');
   const textAreaElement = document.querySelector('textarea');
   const checkoutButtonElement = document.querySelector('button.checkout');
   let totalPrice = 0;
   const uniqueProducts = {};

   for (const buttonElement of addProductButtonElements) {
      const productElement = buttonElement.parentElement.parentElement;
      buttonElement.addEventListener('click', () => {
         const title = productElement.querySelector('.product-title').textContent;
         const price = Number(productElement.querySelector('.product-line-price').textContent);
         totalPrice += price;
         uniqueProducts[title] = true;


         textAreaElement.textContent += `Added ${title} for ${price.toFixed(2)} to the cart.\n`;   
      });
   }
   checkoutButtonElement.addEventListener('click', () => {
      Array.from(addProductButtonElements).forEach(buttonElement => buttonElement.setAttribute('disabled', 'disabled'));
      const list = Object.keys(uniqueProducts).join(', ');
      
      textAreaElement.textContent += `You bought ${list} for ${totalPrice}.`;
      });
}