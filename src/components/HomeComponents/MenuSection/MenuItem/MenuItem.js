import React from "react";
import Button from "src/components/UI/Components/Button";
import { StyledMenuItem } from "./MenuItem.styes";

const MenuItem = (props) => {
  const {
    menuItem,
    cartItems,
    addToCart,
    decrementQuantity,
    incrementQuantity,
  } = props;
  const { itemName, description, price, id } = menuItem;

  const cartItem = cartItems.find((cartItem) => {
    if (cartItem.id === id) {
      return cartItem;
    }
  });

  const addToCartHandler = () => {
    addToCart({
      id: id,
      itemName: itemName,
      price: price,
      qty: 1,
    });
  };

  return (
    <StyledMenuItem>
      <div className="left">
        <div className="left__top">
          <p className="itemName">{itemName}</p>
          <p className="itemPrice dark">₹{price}</p>
        </div>
        <p className="description dark">{description}</p>
      </div>
      <div className="right">
        {cartItem ? (
          <div className="item-quantity">
            <button onClick={() => decrementQuantity(id)}>-</button>{" "}
            <span>{cartItem.qty}</span>{" "}
            <button onClick={() => incrementQuantity(id)}>+</button>
          </div>
        ) : (
          <Button className="inverse" onClick={addToCartHandler}>
            Add To Cart
          </Button>
        )}
      </div>
    </StyledMenuItem>
  );
};

export default MenuItem;
