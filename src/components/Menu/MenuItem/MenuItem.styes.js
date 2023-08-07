import styled from "styled-components";
import * as variables from "src/variables";

export const StyledMenuItem = styled.div`
  background-color: ${variables.secondaryColor};
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  align-items: center;
  .itemName {
    font-size: 35px;
    line-height: 55px;
    margin-bottom: 0;
    font-family: ${variables.secondaryFont};
    display: flex;
    letter-spacing: 2px;
  }
  .description {
    margin-bottom: 0;
  }
  .right {
    .itemPrice {
      font-size: 25px;
      line-height: 40px;
      text-align: right;
      margin-bottom: 5px;
    }
    .item-quantity {
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
        color: ${variables.white};
        text-align: center;
      }
    }
  }
`;
