var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({
    [item]:Math.floor(Math.random()*100 + 1)
  });
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length <= 0){
    console.log("Your shopping cart is empty.");
    return;
  }


  var rv = "In your cart, you have ";
  for (var i = 0; i < cart.length; i++) {
    cart[i]
  }

}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
