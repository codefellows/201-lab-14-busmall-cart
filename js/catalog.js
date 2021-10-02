/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);


// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //Done: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
    let optionTag = document.createElement('option');

    // trying to add <option> tags to our products

    //optionTag.innerText = Product.allProducts[i];
    optionTag.value = Product.allProducts[i].name;
    optionTag.innerText = Product.allProducts[i].name;

    // adding new 
    selectElement.appendChild(optionTag);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  // TODO: Prevent the page from reloading
  event.preventDefault();

  let productName = event.target[1].value;
  let productQuantity = event.target[2].value;

  // Do all the things ...
  addSelectedItemToCart(productName, productQuantity);
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart(name, quantity) {
  // new code
  for (let i = 0; i < Product.allProducts.length; i++) {
    if (name === Product.allProducts[i].name) {
      cart.addItem(name, quantity);
      break;

    }
  }

  // old code
  // TODO: suss out the item picked from the select list
  //const item = document.getElementById('items').value;

  // TODO: get the quantity
  // const quantity = document.getElementById('quantity').value;

  // TODO: using those, add one item to the Cart
  //cart.addItem(item, quantity);

}


// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {


  const itemCount = document.getElementById('itemCount');
  itemCount.textContent = cartCount;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {

  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  let reviewItem = items.value;
  let reviewQuantity = quantity.value;
  let cartContents = document.getElementById('cartContents');
  let cartEl = document.createElement('p');

  cartEl.innerText = `${reviewItem}, ${reviewQuantity}`;
  cartContents.appendChild(cartEl);
  console.log(reviewItem, reviewQuantity);


}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
