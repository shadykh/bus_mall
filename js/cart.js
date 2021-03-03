/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;
let itemCount;

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
  let table = document.getElementById("cart");
  for(let i =1; i<table.rows.length ; i++){
      table.deleteRow(i);
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let table = document.getElementById("cart");

  // TODO: Iterate over the items in the cart
  for (let i =0; i< cart.items.length; i++){

  // TODO: Create a TR
  const trElement = document.createElement('tr');
  
  // TODO: Create a TD for the delete link, quantity,  and the item
  const td0Element = document.createElement('td');
  td0Element.textContent = 'X';
  const td1Element = document.createElement('td');
  td1Element.textContent = cart.items[i].quantity;
  const td2Element = document.createElement('td');
  td2Element.textContent = cart.items[i].product;
  
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  table.appendChild(trElement);
  trElement.appendChild(td0Element);
  trElement.appendChild(td1Element);
  trElement.appendChild(td2Element);

  }


}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  let index = event.target.parentNode.rowIndex;
  cart.removeItem(index-1);
  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage();
  // TODO: Re-draw the cart table
  //clearCart();
  let table = document.getElementById("cart");
  if (index !== 0){
    table.deleteRow(index);
  }
  
}

// This will initialize the page and draw the cart on screen
renderCart();
