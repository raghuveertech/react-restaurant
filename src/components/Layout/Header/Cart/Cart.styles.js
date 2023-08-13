import styled from "styled-components";
import * as variables from "src/variables";

export const StyledCart = styled.div`
  cursor: pointer;
  position: relative;
  margin-right: 15px;
`;

export const CartIcon = styled.img`
  width: 25px;
  -webkit-filter: grayscale(1) invert(1);
  filter: grayscale(1) invert(1);
`;

export const CartCount = styled.div`
  position: absolute;
  top: -15px;
  right: -15px;
  width: 25px;
  height: 25px;
  padding: 0;
  margin-left: 0;
  text-align: center;
  background-color: ${variables.primaryColor};
  color: ${variables.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
`;
