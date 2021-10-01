/* global Cart */
"use strict";

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById("cart");
table.addEventListener("click", removeItemFromCart);
let cart;

function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
    loadCart();
    clearCart();
    showCart();
}
let tableBody = document.querySelector("tbody");

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
    tableBody.innerHTML = "";
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
    // TODO: Find the table body
    // TODO: Iterate over the items in the cart
    for (let i = 0; i < cart.items.length; i++) {
        let itemRow = document.createElement("tr");
        let deleteData = document.createElement("td");
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Remove";
        deleteButton.className = "delete";
        deleteData.appendChild(deleteButton);
        let itemData = document.createElement("td");
        itemData.innerText = cart.items[i].product;
        console.log(cart.items[i]);
        let quantityData = document.createElement("td");
        quantityData.innerText = cart.items[i].quantity;
        itemRow.appendChild(deleteData);
        itemRow.appendChild(quantityData);
        itemRow.appendChild(itemData);
        tableBody.appendChild(itemRow);
    }
    // TODO: Create a TR
    // TODO: Create a TD for the delete link, quantity,  and the item
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
}

function removeItemFromCart(event) {
    // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
    console.log(event);
    // cart.removeItem("item");
    // TODO: Save the cart back to local storage

    // TODO: Re-draw the cart table
}

// This will initialize the page and draw the cart on screen
renderCart();
let checkOutPage = document.querySelector("main");
let customerInfo = document.createElement("fieldset");
checkOutPage.appendChild(customerInfo);

let customerFields = [
    "name",
    "street",
    "city",
    "state",
    "zipcode",
    "phone number",
];

for (let i = 0; i < customerFields.length; i++) {
    let label = document.createElement("label");
    let input = document.createElement("input");
    label.innerText = customerFields[i];
    input.type = "text";
    input.name = customerFields[i];
    customerInfo.appendChild(label);
    customerInfo.appendChild(input);
}

let cCardField = document.createElement("fieldset");
checkOutPage.appendChild(cCardField);
let label = document.createElement("label");
let input = document.createElement("input");
label.innerText = "credit card information";
input.type = "number";

// let nameLabel = document.createElement("label");
// let nameInput = document.createElement("input");
// nameInput.type = "text";
// nameLabel.innerText = "Name";
// let streetLabel = document.createElement("label");
// let streetInput = document.createElement("input");
// streetInput.type = "text";
// streetLabel.innerText = "street";
// let streetLabel = document.createElement("label");
// let streetInput = document.createElement("input");