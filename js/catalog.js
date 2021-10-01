/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([JSON.parse(localStorage.getItem('cart')) || []);


// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
    let option = document.createElement('option');
    option.innerText = Product.allProducts[i].name;
    option.value = Product.allProducts[i].name;
    selectElement.appendChild(option);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  // TODO: Prevent the page from reloading
  event.preventDefault();
  let productName = event.target[1].value
  let quantity = event.target[2].value
  // // Do all the things ...
  addSelectedItemToCart(productName, quantity);
  // addSelectedItemToCart(event);
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview(event);

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart(name, quantity)
// function addSelectedItemToCart(event) {
  // TODO: suss out the item picked from the select list
    // let selectedItems = event.target.items.value;
    for (let i = 0; i < Product.allProducts.length; i++) {
      let currentProduct = Product.allProducts[i];
      if (name === currentProduct.name) {
        cart.addItem(currentProduct, quantity);
        break;
      }
    }
  // TODO: get the quantity
    // let selectedQuantity = event.target.quantity.value;
  // TODO: using those, add one item to the Cart
  // cart.addItem(selectedItems, selectedQuantity);
  // cart.addItem(name, quantity);
}


// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
    let addCartCount = document.getElementById('itemCount');
    let diffItemsInCart = cart.items.length;
    let cartVerification = document.createElement('p');
    cartVerification.innerText = 'Item added to cart';
    addCartCount.innerText = diffItemsInCart;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview(event) {
  // TODO: Get the item and quantity from the form
  let selectedItems = event.target.items.value;
  let selectedQuantity = event.target.quantity.value;
  // TODO: Add a new element to the cartContents div with that information
  let parentEl = document.getElementById('cartContents');
  let cartEl = document.createElement('p');
  cartEl.innerText = `Item: ${selectedItems}, Quantity: ${selectedQuantity}`
  parentEl.appendChild(cartEl);
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
