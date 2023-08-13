import React from "react";
import { StyledMenuContainer } from "./Menu.styles";
import MenuItem from "./MenuItem/MenuItem";
const MenuSection = (props) => {
  const {
    menuItems,
    cartItems,
    addToCart,
    cartQuantityUpdate,
    removeItemFromCart,
    incrementQuantity,
    decrementQuantity,
  } = props;
  return (
    <>
      <StyledMenuContainer>
        <h2>
          <span>Check our tasty</span> Menu
        </h2>
        <div className="menu-items">
          {menuItems.map((menuItem) => {
            return (
              <MenuItem
                key={menuItem.id}
                menuItem={menuItem}
                cartItems={cartItems}
                addToCart={addToCart}
                cartQuantityUpdate={cartQuantityUpdate}
                removeItemFromCart={removeItemFromCart}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
              />
            );
          })}
        </div>
      </StyledMenuContainer>
    </>
  );
};

export default MenuSection;
