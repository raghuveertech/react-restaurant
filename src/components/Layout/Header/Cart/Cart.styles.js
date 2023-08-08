import styled from "styled-components";
import * as variables from "src/variables";

export const StyledCart = styled.div`
  background-color: ${variables.primaryColor};
  padding: 10px 20px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  color: ${variables.white};
  cursor: pointer;
  font-weight: 700;
`;

export const CartIcon = styled.img`
  width: 25px;
  margin-right: 10px;
`;

export const CartCount = styled.div`
  margin-left: 10px;
  background-color: ${variables.white};
  padding: 5px 10px 5px 10px;
  border-radius: 10px;
  color: ${variables.secondaryColor};
  width: 55px;
  text-align: center;
  font-weight: 600;
  letter-spacing: 1px;
`;
