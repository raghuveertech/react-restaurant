import React from "react";
import Popup from "../UI/Components/Popup";
import { StyledCartWrapper } from "./CartPopup.styles";
import CartItem from "./CartItem/CartItem";

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
    <Popup
      closeBtnAction={() => setShowCartPopup(false)}
      mainHeading={"Cart"}
      btn1Text={"Close"}
      btn1Action={() => setShowCartPopup(false)}
      btn2Text={"Checkout"}
      btn2Action={() => proceedToCheckout()}
    >
      <StyledCartWrapper>
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
        <div className="total-price">Total: ₹{cartTotal}</div>
      </StyledCartWrapper>
    </Popup>
  );
};

export default CartPopup;
