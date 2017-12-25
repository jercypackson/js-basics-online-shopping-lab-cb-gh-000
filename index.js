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
  } else {
    var rv = "In your cart, you have ";
    for (var i = 0; i < cart.length; i++) {
      var k = Object.keys(cart[i])[0];
      rv += k + " at $" + cart[i][k] + ".";
    }
    console.log(rv);
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
