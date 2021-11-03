export function addToCart(payload) {
  return {
    type: 'ADD_TO_CART',
    payload
  }
}

export function removeToCart(payload) {
  return {
    type: 'REMOVE_FROM_CART',
    payload
  }
}