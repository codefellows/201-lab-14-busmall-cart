/* global Cart */
'use strict';
// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart; // declaring a variable 
//let cartList = [];

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let cartTableRows = document.querySelectorAll('#cart tbody tr'); //grabing all the table row
  for (let i = 0; i < cartTableRows.length; i++) {// looping  through items in the cart
    if (cartTableRows[i]) { // if item exists at index 
      cartTableRows[i].remove();// remove that item at that [i] in the cart
    }
  }
}

// DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // DONE: Find the table body
  let cartBody = document.querySelector('tbody');// create tbody inside the table
  // DONE: Iterate over the items in the cart
  for (let i in cart.items) {// doing the for loop in short hand
    // DONE: Create a TR
    let tRow = document.createElement('tr');
    cartBody.appendChild(tRow);

    // DONE: Create a TD for the delete link, quantity,  and the item
    let deleteTd = document.createElement('td');
    deleteTd.textContent = 'x';
    deleteTd.classList.add('remover'); //naming the classlist remover // deleter 
    tRow.appendChild(deleteTd);

    let quantityTd = document.createElement('td');
    quantityTd.textContent = cart.items[i].quantity;
    tRow.appendChild(quantityTd);

    let itemTd = document.createElement('td');
    itemTd.textContent = cart.items[i].product; //product name
    tRow.appendChild(itemTd);
  }


  console.log(showCart);
  // DONE: Add the TR to the TBODY and each of the TD's to the TR


}
showCart();

function removeItemFromCart(event) {

  // DONE: When a delete link is clicked, use cart.removeItem to remove the correct item
  if (event.target.classList.contains('remover')){ 
  let parsedId =  parseInt(event.target.id); //parsing only the targeted id which is the 'remover'.
 cart.removeItem(parsedId); //removing the parsedId
  // DONE: Save the cart back to local storage
  cart.saveToLocalStorage();// saving to the local storage

  // DONE: Re-draw the cart table
 renderCart();// calling the cart
  }
}

// This will initialize the page and draw the cart on screen
renderCart();
