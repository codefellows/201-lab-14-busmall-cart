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
    let eachProduct = Product.allProducts[i];
    let newOption = document.createElement('option');
    newOption.textContent = eachProduct.name; 
    selectElement.appendChild(newOption);
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  // DONE: Prevent the page from reloading
  event.preventDefault();


  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// DONE: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // DONE: suss out the item picked from the select list
let newSelectedItem = document.getElementById('items').value;
  // DONE: get the quantity
let seletedQuantity = document.getElementById('quantity').value;

 cart.addItem(newSelectedItem, seletedQuantity);
  // DONE: using those, add one item to the Cart
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
let itemCart = document.getElementById('itemCount');
let textCart = document.createElement('textCart');

textCart.textContent = (`Items in cart: ${cart.items.length}`);

itemCart.appendChild(textCart);
}

// DONE: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
        // logging the ID's from index.html
  let item = document.getElementById('items').value;
  let quantity = document.getElementById('quantity').value;
  let cartContents = document.getElementById('cartContents');
      // creating the Cart Preview element
  let cartPreview = document.createElement('cartPreview');
      // adding the text for the consumer for their product choice and quantity
  cartPreview.textContent = ` Items chosen: ${item}, qty: ${quantity}.`;
      // appending the contents to the web browser to include quantity and item
  cartContents.appendChild(cartPreview);

  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();


//<input id="quantity" type="number" />
//<select id="items"></select>
//<form id="catalog">