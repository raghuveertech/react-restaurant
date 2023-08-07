import React from "react";
import { StyledButton } from "src/components/UI/Components/Button.styles";
import { StyledCartItem } from "./CartItem.styles";

const CartItem = (props) => {
  const { cartItem, decrementQuantity, incrementQuantity, removeItemFromCart } =
    props;
  return (
    <StyledCartItem key={cartItem.id}>
      <div className="cart-item__top">
        <div className="cart-item__top__left">
          <p className="cart-item__top__left__item-name">{cartItem.itemName}</p>
          <p className="cart-item__top__left__item-price">₹{cartItem.price}</p>
        </div>
        <div className="cart-item__top__right">
          <p className="cart-item__top__right__qty-group">
            <button onClick={() => decrementQuantity(cartItem.id)}>-</button>
            <span>{cartItem.qty}</span>
            <button onClick={() => incrementQuantity(cartItem.id)}>+</button>
          </p>
          <p className="cart-item__top__right__line-total">
            ₹{cartItem.price * cartItem.qty}
          </p>
        </div>
      </div>
      <div className="cart-item__bottom">
        <StyledButton
          className="inverse small"
          onClick={() => removeItemFromCart(cartItem.id)}
        >
          Remove
        </StyledButton>
      </div>
    </StyledCartItem>
  );
};

export default CartItem;
