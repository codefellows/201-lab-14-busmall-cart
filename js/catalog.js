/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //DONE: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
    let optionEl = document.createElement('option');
    optionEl.value = Product.allProducts[i].name;
    optionEl.textContent = Product.allProducts[i].name;
    selectElement.appendChild(optionEl);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(e) {
  e.preventDefault();

  // DONE DONE: Prevent the page from reloading

  // Do all the things ...
  addSelectedItemToCart(e);
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// DONE DONE: Add the selected item and quantity to the cart
function addSelectedItemToCart(event) {
  console.log(event.target);
  for (let i = 0; i < event.target[1].length; i++) {
    if (event.target[1][i].selected === true) {
      let selectedName = event.target[1][i].value;
      let selectedQuantity = event.target[2].value;
      for (let i = 0; i < Product.allProducts.length; i++) {
        if (selectedName == Product.allProducts[i].name) {
          cart.addItem(Product.allProducts[i], selectedQuantity)
        }
      }
    }
  }


  // DONE DONE: suss out the item picked from the select list
  // DONE DONE: get the quantity
  // DONE DONE: using those, add one item to the Cart
}

// DONE DONE: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  let counterEl = document.getElementById('itemCount');
  counterEl.textContent = ` (${cart.items.length})`;
}

// DONE: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  let previewEl = document.getElementById('cartContents');
  previewEl.textContent = '';
  let olEl = document.createElement('ol');
  for (let i = 0; i < cart.items.length; i++) {
    let liEl = document.createElement('li');
    liEl.textContent = `Item: ${cart.items[i].product.name} Quantitiy: ${String(cart.items[i].quantity)} `;
    olEl.appendChild(liEl);
  }
  previewEl.appendChild(olEl);
  // DONE: Get the item and quantity from the form
  // DONE: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
