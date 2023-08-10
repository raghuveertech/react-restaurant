import React from "react";
import { StyledButton } from "../UI/Components/Button.styles";
import CartItem from "./CartItem/CartItem";
import { StyledCartPopup } from "./CartPopup.styles";
const CartPopup = (props) => {
  const {
    cartItems,
    setShowCartPopup,
    removeItemFromCart,
    incrementQuantity,
    decrementQuantity,
    proceedToCheckout,
  } = props;
  let cartTotal = 0;
  cartItems.forEach((cartItem) => {
    cartTotal += cartItem.qty * cartItem.price;
  });

  return (
    <StyledCartPopup>
      <div className="popup-inner">
        <h2>Cart</h2>
        <a className="popup-close" onClick={() => setShowCartPopup(false)}>
          &times;
        </a>
        <div className="cart-items">
          {cartItems.map((cartItem) => {
            return (
              <CartItem
                cartItem={cartItem}
                removeItemFromCart={removeItemFromCart}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
              />
            );
          })}
        </div>
        <div className="cart-footer">
          <div className="total-price">Total: ₹{cartTotal}</div>
          <div className="cart-footer-buttons">
            <StyledButton
              className="inverse"
              onClick={() => setShowCartPopup(false)}
            >
              Close
            </StyledButton>
            <StyledButton onClick={() => proceedToCheckout()}>
              Checkout
            </StyledButton>
          </div>
        </div>
      </div>
    </StyledCartPopup>
  );
};

export default CartPopup;
