/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart = [];

function loadCart() {
  cart = JSON.parse(localStorage.getItem('cart')) || [];
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
//   clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  for (var i in cart) {
    tbodyEl.removeChild('tr');
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

// TODO: Find the table body
var tbodyEl = document.getElementsByTagName('tbody')[0];
// TODO: Iterate over the items in the cart
    for(var i in cart) {
        // TODO: Create a TR
        var trEl = document.createElement('tr');
        // TODO: Create a TD for the delete link, quantity,  and the item
        var tdEl = document.createElement('td');
        var tdEl2 = document.createElement('td');
        var tdEl3 = document.createElement('td');
        tdEl.textContent = 'X';
        tdEl2.textContent = cart[i].quantity;
        tdEl3.textContent = cart[i].name;
        // TODO: Add the TR to the TBODY and each of the TD's to the TR
        trEl.appendChild(tdEl);
        trEl.appendChild(tdEl2);
        trEl.appendChild(tdEl3);
        tbodyEl.appendChild(trEl);
    }
}

function removeItemFromCart(event) {
    var erase = event.target.textContent;
    console.log(erase);
    if (erase === 'X')
        tbodyEl.removeChild(event.target.parentNode);
// TODO: When a delete link is clicked, use cart.removeItem to remove the correct item

// TODO: Save the cart back to local storage
// TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();