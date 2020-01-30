import React from "react";
import { connect } from "react-redux";

import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIconComponent = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = ({ cart }) => ({
  itemCount: cart.cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity,
    0
  )
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export const CartIcon = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIconComponent);
