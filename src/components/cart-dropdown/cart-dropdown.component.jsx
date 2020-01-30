import React from "react";

import "./cart-dropdown.styles.scss";
import { CustomButton } from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { CartItem } from "../cart-item/cart-item.component";

const CartDropdownComponent = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.cartItems
});

export const CartDropdown = connect(mapStateToProps)(CartDropdownComponent);
