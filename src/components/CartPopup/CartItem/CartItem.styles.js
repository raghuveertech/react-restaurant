import styled from "styled-components";
import * as variables from "src/variables";

export const StyledCartItem = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${variables.secondaryColor};
  padding: 10px 0 10px 0;
  .cart-item {
    &__top {
      display: flex;
      justify-content: space-between;
      &__left {
        &__item-name {
          font-size: 30px;
          font-family: ${variables.secondaryFont};
          color: ${variables.secondaryColor};
        }
        &__item-price {
          font-size: 25px;
          font-weight: 600;
        }
      }
      &__right {
        &__qty-group {
          display: flex;
          align-items: center;
          justify-content: center;
          button {
            width: 30px;
            font-size: 24px;
            line-height: normal;
            border-radius: 50%;
            border: 0;
            color: ${variables.black};
            cursor: pointer;
          }
          span {
            display: inline-block;
            margin: 0 5px;
            font-size: 16px;
            line-height: 16px;
            width: 20px;
            margin-bottom: 0;
            letter-spacing: 2px;
            color: ${variables.primaryColor};
            text-align: center;
          }
        }
        &__line-total {
          text-align: center;
          font-size: 25px;
          color: ${variables.secondaryColor};
          font-weight: 600;
        }
      }
    }
    &__bottom {
      text-align: right;
      &__remove {
        cursor: pointer;
        color: ${variables.red};
        text-transform: uppercase;
      }
    }
  }
`;
