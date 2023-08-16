import { styled } from "styled-components";
import * as variables from "src/variables";

export const StyledCartWrapper = styled.div`
  .cart-items {
    height: 260px;
    overflow: auto;
    padding: 10px 20px 10px 20px;
    background-color: ${variables.lightBlue};
    margin: 15px 0 0 0;
    /* width */
    &::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: ${variables.lightBlue};
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: ${variables.gray};
    }
  }

  .total-price {
    text-align: right;
    padding: 25px 20px 0px 0;
    font-size: 25px;
    font-weight: 600;
  }
`;
