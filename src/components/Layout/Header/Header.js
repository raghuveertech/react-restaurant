import React from "react";
import { StyledHeader } from "./Header.styles";
import Cart from "./Cart/Cart";
import * as variables from "src/variables";

const Header = (props) => {
  const { cartItems, setShowCartPopup } = props;
  return (
    <StyledHeader>
      <div className="logo">
        <img src={variables.mainLogo} alt="React Restaurant" />
      </div>
      <Cart cartItems={cartItems} setShowCartPopup={setShowCartPopup} />
    </StyledHeader>
  );
};

export default Header;
