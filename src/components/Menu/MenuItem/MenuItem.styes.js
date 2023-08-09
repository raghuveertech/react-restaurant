import styled from "styled-components";
import * as variables from "src/variables";

export const StyledMenuItem = styled.div`
  display: flex;
  flex: 0 0 50%;
  justify-content: space-between;
  padding: 15px 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  align-items: center;
  .left {
    flex: 0 0 calc(100% - 200px);
    &__top {
      display: flex;
      justify-content: space-between;
    }
  }
  .itemName {
    font-size: 20px;
    line-height: 25px;
    font-weight: 600;
    margin-bottom: 10px;
    font-family: ${variables.primaryFont};
    display: flex;
  }
  .itemPrice {
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    text-align: right;
    margin-bottom: 5px;
  }
  .description {
    font-size: 14px;
    line-height: 20px;
    font-style: italic;
    margin-bottom: 0;
    color: ${variables.darkGray};
  }
  .right {
    flex: 0 0 200px;
    text-align: right;
    .item-quantity {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 38px;
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
        color: ${variables.secondaryColor};
        text-align: center;
      }
    }
  }
`;
