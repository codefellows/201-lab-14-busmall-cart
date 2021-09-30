/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

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
  let allRowsEl = document.querySelectorAll('tr');
  console.log(allRowsEl);
  for (let i = 0; i < allRowsEl.length; i++) {
    allRowsEl[i].remove();
  }
}

// DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  let bodyEl = document.querySelector('#cart tbody');
  bodyEl.innerHTML = '';
  // DONE: Find the table body

  for (let i = 0; i < cart.items.length; i++) {
    let trEl = document.createElement('tr');
    let deleteEl = document.createElement('td');
    let deleteAEl = document.createElement('a');
    let quantityEl = document.createElement('td');
    let nameEl = document.createElement('td');
    quantityEl.textContent = cart.items[i].quantity;
    nameEl.textContent = cart.items[i].product.name;
    deleteAEl.textContent = 'X';
    deleteEl.appendChild(deleteAEl);
    trEl.appendChild(nameEl);
    trEl.appendChild(quantityEl);
    trEl.appendChild(deleteEl);
    bodyEl.appendChild(trEl);
  }
  // DONE: Iterate over the items in the cart
  // DONE: Create a TR
  // DONE: Create a TD for the delete link, quantity,  and the item
  // DONE: Add the TR to the TBODY and each of the TD's to the TR
}

function removeItemFromCart(event) {
  for (let i = 0; i < cart.items.length; i++) {
    if (cart.items[i].product.name === event.target.parentNode.parentNode.firstChild.innerText) {
      cart.removeItem(cart.items[i]);
    }
  }
  cart.saveToLocalStorage(cart.items);
  showCart();
  // DONE: When a delete link is clicked, use cart.removeItem to remove the correct item
  // DONE: Save the cart back to local storage
  // DONE: Re-draw the cart table
}

// This will initialize the page and draw the cart on screen
renderCart();
