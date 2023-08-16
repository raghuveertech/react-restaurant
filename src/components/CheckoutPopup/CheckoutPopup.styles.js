import { styled } from "styled-components";
import * as variables from "src/variables";

export const StyledCheckoutWrapper = styled.section`
  .orderSuccess {
    text-align: center;
    margin-top: 20px;
    color: ${variables.success};
    font-size: 22px;
  }
  .checkout-form {
    margin-top: 15px;
    .row {
      display: flex;
      .half-width {
        flex: 0 0 50%;
        padding: 0 15px;
        margin-bottom: 15px;
      }
      .full-width {
        flex: 0 0 100%;
        padding: 0 15px;
        margin-bottom: 15px;
      }
      label {
        width: 100%;
        display: block;
        margin-bottom: 5px;
        display: none;
      }
      .error {
        color: ${variables.red};
        margin-top: 5px;
        margin-bottom: 0;
      }
      input[type="text"],
      input[type="email"],
      select {
        width: 100%;
        height: 45px;
        font-size: 18px;
        border: 0;
        border-bottom: 1px solid;
        background-color: transparent;
        outline: 0;
        &:focus,
        &:focus-visible,
        &:active {
          border: 0;
          border-bottom: 1px solid ${variables.primaryColor};
        }
      }
    }
  }
`;
