export const cart = [];

export function addToCart(productId){
  let matchingItem; // check if the item already exist in the cart, if so, increase quantity by 1
  cart.forEach((cartItem) => {
    if(productId === cartItem.productId){
      matchingItem = cartItem;
    }
  });

  if(matchingItem){
    matchingItem.quantity += 1;
  }else{
    cart.push({
      productId,
      quantity: 1
    });
  }
}