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

    //first one
    rv += getString(0);

    if (cart.length == 2){
      rv += " and " + getString(1);
    } else if (cart.length > 2){
      for (var i = 1; i < cart.length; i++) {
        rv += ", ";
        
        if (i === cart.length - 1){
          rv += "and ";
        }

        rv += getString(i);
      }
    }

    console.log(rv + ".");
  }
}

function getString(i){
  var k = Object.keys(cart[i])[0];
  return k + " at $" + cart[i][k];
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
