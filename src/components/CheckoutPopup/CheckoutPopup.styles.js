import { styled } from "styled-components";
import * as variables from "src/variables";

export const StyledCheckoutPopup = styled.section`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: 5;
  background-color: rgb(0 0 0 / 25%);
  backdrop-filter: blur(5px);
  .popup-inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    width: 100%;
    max-width: 700px;
    background-color: ${variables.white};
    border-radius: 5px;
    padding: 20px;
    h2 {
      text-align: center;
    }
    .popup-close {
      position: absolute;
      cursor: pointer;
      top: 0;
      right: 10px;
      font-size: 40px;
      color: ${variables.gray};
      &:hover {
        color: ${variables.secondaryColor};
      }
    }
  }
  .cart-items {
    height: 260px;
    overflow: auto;
    padding: 10px 20px 10px 20px;
    background-color: ${variables.lightGray};

    /* width */
    &::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: ${variables.lightGray};
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: ${variables.gray};
    }
  }
  .cart-footer {
    .total-price {
      text-align: right;
      padding: 25px 20px 0px 0;
      font-size: 25px;
      font-weight: 600;
    }
    .cart-footer-buttons {
      display: flex;
      justify-content: space-between;
      padding: 20px 0 10px 0;
    }
  }
`;
