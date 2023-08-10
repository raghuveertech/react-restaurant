import * as variables from "src/variables";
import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${variables.primaryColor};
  color: ${variables.white};
  padding: 8px 15px;
  border: 0;
  cursor: pointer;
  border-radius: 20px;
  font-size: 12px;
  text-transform: uppercase;
  transition: all 0.3s;
  border: 1px solid ${variables.primaryColor};
  &:hover {
    background-color: ${variables.white};
    color: ${variables.primaryColor};
    border: 1px solid ${variables.primaryColor};
  }
  &.bordered {
    border: 1px solid ${variables.secondaryColor};
    color: ${variables.secondaryColor};
    &:hover {
      color: ${variables.white};
    }
  }
  &.inverse {
    background-color: ${variables.secondaryColor};
    border: 1px solid ${variables.secondaryColor};
    color: ${variables.white};
    &:hover {
      background-color: ${variables.white};
      color: ${variables.secondaryColor};
      border: 1px solid ${variables.secondaryColor};
    }
    &.small {
      padding: 5px 10px 5px 10px;
    }
  }
`;
