"use strict";
// min is here
// Cart constructor.
const Cart = function(items) {
    // this.items is an array of CartItem instances.
    this.items = items;
};

Cart.prototype.addItem = function(product, quantity) {
    // TODO: Fill in this instance method to create a new CartItem and add it to this.items
    let newItem = new CartItem(product, quantity);
    this.items.push(newItem);
};

Cart.prototype.saveToLocalStorage = function() {
    // TODO: Fill in this instance method to save the contents of the cart to localStorage
    let order = JSON.stringify(this.items);
    localStorage.setItem("cart", order);
    // const cartItems = JSON.parse(localStorage.getItem("cart"));
    // console.log(cartItems);
    // if (cartItems === null) {
    //     let order = JSON.stringify(this.items);
    //     localStorage.setItem("cart", order);
    // } else {
    // cartItems.push(this.items);
    // console.log(cartItems[0].product, cartItems[0].quantity);
    // for (let i = 0; i < cartItems.length; i++) {
    //     let newOrder = new CartItem(cartItems[i].product, cartItems[i].quantity);
    //     cartItems.push(newOrder);
    //     console.log(cartItems);
    // }
    // }
};

Cart.prototype.removeItem = function(item) {
    // TODO: Fill in this instance method to remove one item from the cart.
    let unremovedItems = [];
    for (let i = 0; i < this.items.length; i++) {
        if (this.items[i] !== item) {
            unremovedItems.push(this.items[i]);
        }
    }
    this.items = unremovedItems;

    // Note: You will have to decide what kind of parameter to pass in here!
};

const CartItem = function(product, quantity) {
    this.product = product;
    this.quantity = quantity;
};

// Product contructor.
const Product = function(filePath, name) {
    this.filePath = filePath;
    this.name = name;
    Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
    new Product("assets/bag.jpg", "Bag");
    new Product("assets/banana.jpg", "Banana");
    new Product("assets/bathroom.jpg", "Bathroom");
    new Product("assets/boots.jpg", "Boots");
    new Product("assets/breakfast.jpg", "Breakfast");
    new Product("assets/bubblegum.jpg", "Bubblegum");
    new Product("assets/chair.jpg", "Chair");
    new Product("assets/cthulhu.jpg", "Cthulhu");
    new Product("assets/dog-duck.jpg", "Dog-Duck");
    new Product("assets/dragon.jpg", "Dragon");
    new Product("assets/pen.jpg", "Pen");
    new Product("assets/pet-sweep.jpg", "Pet Sweep");
    new Product("assets/scissors.jpg", "Scissors");
    new Product("assets/shark.jpg", "Shark");
    new Product("assets/sweep.png", "Sweep");
    new Product("assets/tauntaun.jpg", "Taun-Taun");
    new Product("assets/unicorn.jpg", "Unicorn");
    new Product("assets/water-can.jpg", "Water Can");
    new Product("assets/wine-glass.jpg", "Wine Glass");
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();