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

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let removeRows = getElementById('cart-container');
  removeRows();
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart(event) {

  // TODO: Find the table body
  let parentEl = document.getElementsByName('tbody');
  // TODO: Iterate over the items in the cart

  // TODO: Create a TR
  let rowEl = document.createElement('tr');
  // TODO: Create a TD for the delete link, quantity,  and the item
  let dataEl1 = document.createElement('td')
  .innerText('delete link')
  let dataEl2 = document.createElement('td')
  .innerText(event.target.quanity.value);
  let dataEl3 = document.createElement('td')
  .innerText(event.target.items.value);
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  parentEl.appendchild(rowEl);
  rowEl.appendchild(dataEl1)
  rowEl.appendchild(dataEl2)
  rowEl.appendchild(dataEl3)
  
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
