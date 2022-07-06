import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => null,
  removeItemToCart: () => null,
  clearItemFromCart: () => null,
  cartCount: 0,
  totalPrice: 0,
});

export const CART_ACTION_TYPES = {
  TOGGLE_IS_CART_OPEN: "TOGGLE_IS_CART_OPEN",
  ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
  REMOVE_ITEM_FROM_CART: "REMOVE_ITEM_FROM_CART",
  CLEAR_CART_ITEMS: "CLEAR_CART_ITEMS",
};

const CartReducer = (state, action) => {
  const { type, payload } = action;
  const { cartItems, cartCount, totalPrice } = payload;
  switch (type) {
    case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems,
        cartCount,
        totalPrice,
      };
    case CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPES.CLEAR_CART_ITEMS:
      return {
        ...state,
        cartItems: [],
      };
    case CART_ACTION_TYPES.TOGGLE_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`Unhandled action type ${type} in cart reducer.`);
  }
};

const INITIAL_STATE = {
  cartItems: [],
  isCartOpen: false,
  cartCount: 0,
  totalPrice: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);
  const { isCartOpen, cartItems, cartCount, totalPrice } = state;

  const updateCartItemReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.price * 76 * cartItem.quantity,
      0
    );
    dispatch(
      createAction(CART_ACTION_TYPES.ADD_ITEM_TO_CART, {
        cartItems: newCartItems,
        cartCount: newCartCount,
        totalPrice: newCartTotal,
      })
    );
  };

  const addItemToCart = (product) => {
    const newCartItems = addCartItem(cartItems, product);
    updateCartItemReducer(newCartItems);
  };

  const removeItemToCart = (product) => {
    const newCartItems = removeCartItem(cartItems, product);
    updateCartItemReducer(newCartItems);
  };

  const clearItemFromCart = () => {
    const newCartItems = [];
    updateCartItemReducer(newCartItems);
  };

  const setIsCartOpen = () => {
    dispatch(createAction(CART_ACTION_TYPES.TOGGLE_IS_CART_OPEN, !isCartOpen));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    removeItemToCart,
    clearItemFromCart,
    totalPrice,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
