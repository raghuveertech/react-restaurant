import React from "react";
import { StyledButton } from "./Button.styles";

const Button = (props) => {
  return (
    <StyledButton className={props.className} onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
