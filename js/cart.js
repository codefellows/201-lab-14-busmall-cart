/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  console.log(cartItems);
  cart = new Cart(cartItems);
  console.log(cart);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let clearTable = document.querySelector('tbody');
  clearTable.innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
  let clearTable = document.querySelector('tbody');
  // TODO: Iterate over the items in the cart
  for(let i = 0; i < cart.items.length; i++){
    let tableRow = document.createElement('tr');
    
    let itemData = document.createElement('td');
    itemData.innerText = cart.items[i].product;
    itemData.setAttribute('class', cart.items[i].product);

    let quantityData = document.createElement('td'); 
    quantityData.innerText = cart.items[i].quantity;
    
    let deleteButton = document.createElement('td');
    deleteButton.innerText = 'X';
    deleteButton.classList.add('remover');
    deleteButton.setAttribute('id', i);

    tableRow.appendChild(itemData);
    tableRow.appendChild(quantityData);
    tableRow.appendChild(deleteButton);

    clearTable.appendChild(tableRow);
  }
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
  let table = event.target.classList.contains('remover');
  if (table){
    cart.removeItem(cart.items[parseInt(event.target.id)].product);
    cart.saveToLocalStorage();
  }

  renderCart();
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
