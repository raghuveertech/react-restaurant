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
      <nav className="main-menu">
        <ul>
          <li>
            <a href="" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="" className="">
              About
            </a>
          </li>
          <li>
            <a href="" className="">
              Menu
            </a>
          </li>
          <li>
            <a href="" className="">
              Chefs
            </a>
          </li>
          <li>
            <a href="" className="">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <Cart cartItems={cartItems} setShowCartPopup={setShowCartPopup} />
    </StyledHeader>
  );
};

export default Header;
