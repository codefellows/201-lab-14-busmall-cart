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
    
    let deleteButton = document.createElement('td');
    deleteButton.innerText = 'X';
    deleteButton.classList.add('remover');
    deleteButton.setAttribute('id', i);
    
    
    let quantityData = document.createElement('td'); 
    quantityData.innerText = cart.items[i].quantity;
    
    let itemData = document.createElement('td');
    itemData.innerText = cart.items[i].product;
    itemData.setAttribute('class', cart.items[i].product);
    let pictureData = document.createElement('img');
    for(let img = 0; img < Product.allProducts.length; img++){
      if(cart.items[i].product === Product.allProducts[img].name){
        pictureData.setAttribute('src',Product.allProducts[img].filePath);
        break;
      }
    }
    
    tableRow.appendChild(deleteButton);
    tableRow.appendChild(quantityData);
    tableRow.appendChild(itemData);
    tableRow.appendChild(pictureData);

    clearTable.appendChild(tableRow);
  }
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
  let table = event.target.classList.contains('remover');
  let proDuct =cart.items[parseInt(event.target.id)].product;
  let qunt = cart.items[parseInt(event.target.id)].quantity;
  console.log(proDuct,qunt);

  if (table){
    cart.removeItem(cart.items[parseInt(event.target.id)].product,cart.items[parseInt(event.target.id)].quantity);
    cart.saveToLocalStorage();
  }

  renderCart();
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

function userInfo(){
  let parentEl = document.getElementById('cart-container');
  console.log(parentEl);

  let formEl = document.createElement('form');
  formEl.setAttribute('id','form')
  let fieldEl = document.createElement('fieldset');

  let infoTextArray = ['Name','Street','City','State'];
  for (let i =0; i<infoTextArray.length; i++){
    let labelEl = document.createElement('label');
    let inputEl = document.createElement('input');
    labelEl.setAttribute('for',infoTextArray[i]);
    labelEl.innerText = infoTextArray[i];
    inputEl.setAttribute('type','text');
    fieldEl.appendChild(labelEl);
    fieldEl.appendChild(inputEl);

  }
  let infoNumArray = ['Zip','Phone','Credit'];
  for (let i= 0; i<infoNumArray.length; i++){
    let labelEl = document.createElement('label');
    let inputEl = document.createElement('input');
    labelEl.setAttribute('for',infoNumArray[i]);
    labelEl.innerText = infoNumArray[i];
    inputEl.setAttribute('type','number');
    fieldEl.appendChild(labelEl);
    fieldEl.appendChild(inputEl);
  }
  let button = document.createElement('button');
  button.setAttribute('id','button');
  button.setAttribute('type','submit')
  button.innerText = 'Submit';
  fieldEl.appendChild(button);  
  formEl.appendChild(fieldEl);
  parentEl.appendChild(formEl);
  formEl.addEventListener('submit',submitHandler);
}

function submitHandler (event){
  event.preventDefault();
  let button = document.getElementById('button');
  button.setAttribute('class','confirmed');
  button.innerText = 'Confirmed';
}

userInfo();
// This will initialize the page and draw the cart on screen
renderCart();
