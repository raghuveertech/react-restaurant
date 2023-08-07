import React from "react";
import * as variables from "src/variables";
import { StyledCart, CartCount, CartIcon } from "./Cart.styles";
const Cart = (props) => {
  const { cartItems, setShowCartPopup } = props;
  let totalQuantity = 0;
  cartItems.forEach((cartItem) => {
    totalQuantity += cartItem.qty;
  });
  return (
    <StyledCart
      onClick={() => {
        if (totalQuantity) setShowCartPopup(true);
      }}
    >
      <CartIcon src={variables.cartIcon} alt="Cart" />
      Your Cart
      <CartCount>{totalQuantity}</CartCount>
    </StyledCart>
  );
};

export default Cart;
