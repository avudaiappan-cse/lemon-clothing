import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";
const addCartItem = (cartItems, product) => {
  const idx = cartItems.findIndex((item) => item.id === product.id);
  if (idx > -1) {
    cartItems[idx].quantity++;
    return [...cartItems];
  } else {
    const item = { ...product, quantity: 1 };
    return [...cartItems, item];
  }
};

const removeCartItem = (cartItems, product) => {
  const idx = cartItems.findIndex((item) => item.id === product.id);
  if (idx > -1) {
    if (cartItems[idx].quantity === 1) {
      cartItems.splice(idx, 1);
      return [...cartItems];
    } else {
      cartItems[idx].quantity--;
      return [...cartItems];
    }
  }
};

const clearItemFromCart = (cartItems, product) =>
  cartItems.filter((cartItem) => cartItem.id !== product.id);

export const addItemToCart = (cartItems, product) => {
  const newCartItems = addCartItem(cartItems, product);
  return createAction(CART_ACTION_TYPES.ADD_ITEM_TO_CART, newCartItems);
};

export const removeItemFromCart = (cartItems, product) => {
  const newCartItems = removeCartItem(cartItems, product);
  return createAction(CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART, newCartItems);
};

export const clearCartItem = (cartItems, product) => {
  const newCartItems = clearItemFromCart(cartItems, product);
  return createAction(CART_ACTION_TYPES.CLEAR_CART_ITEMS, newCartItems);
};

export const setIsCartOpen = (boolean) => {
  return createAction(CART_ACTION_TYPES.TOGGLE_IS_CART_OPEN, boolean);
};
