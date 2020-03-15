import React, { createContext, useState, useEffect } from "react";

import { addItemToCart, removeItemFromCart } from "./cart.utils";

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  cartItemsCount: 0
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);

  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const addItem = item => setCartItems(addItemToCart(cartItems, item));

  return (
    <CartContext.Provider value={{ hidden, toggleHidden, cartItems, addItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
