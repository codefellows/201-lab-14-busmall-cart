/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItemsObject = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItemsObject.items);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  document.getElementById("cart").getElementsByTagName("tbody").innerHTML = "";
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tableBody = document.getElementById("cart").getElementsByTagName("tbody")[0];
  tableBody.innerHTML = "";

  // TODO: Iterate over the items in the cart
  for (let i = 0; i < cart.items.length; i++) {
    // TODO: Create a TR
    let tableRow = document.createElement("tr");

    // TODO: Create a TD for the delete link, quantity,  and the item
    let deleteEl = document.createElement("td");
    deleteEl.innerText = "delete";
    deleteEl.setAttribute("id", cart.items[i].product)
    deleteEl.addEventListener("click", removeItemFromCart)
    let quantityEl = document.createElement("td");
    quantityEl.innerText = cart.items[i].quantity;
    let itemEl = document.createElement("td");
    itemEl.innerText = cart.items[i].product;

    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    tableRow.appendChild(deleteEl);
    tableRow.appendChild(quantityEl);
    tableRow.appendChild(itemEl);

    tableBody.appendChild(tableRow);
  }

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  cart.removeItem(event.target.id);

  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage();

  // TODO: Re-draw the cart table
  renderCart();

}

// This will initialize the page and draw the cart on screen
renderCart();
