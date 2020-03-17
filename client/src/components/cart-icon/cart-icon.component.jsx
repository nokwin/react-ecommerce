import React from "react";

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from "./cart-icon.styles";

const CartIcon = ({ toggleHidden, cartItemsCount }) => {
  return (
    <CartContainer onClick={toggleHidden}>
      <ShoppingIcon />
      <ItemCountContainer>{cartItemsCount}</ItemCountContainer>
    </CartContainer>
  );
};

export default CartIcon;
