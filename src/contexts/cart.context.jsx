import { createContext, useEffect, useState } from "react";

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

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const total = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * 76 * cartItem.quantity,
      0
    );
    console.log(total);
    setTotalPrice(total);
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };

  const removeItemToCart = (product) => {
    setCartItems(removeCartItem(cartItems, product));
  };

  const clearItemFromCart = () => {
    setCartItems([]);
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
