import React from "react";
import { StyledPopup } from "./Popup.styles";
import { StyledButton } from "./Button.styles";

const Popup = (props) => {
  const {
    closeBtnAction,
    mainHeading,
    btn1Text,
    btn1Action,
    btn2Text,
    btn2Action,
    hideButtons,
  } = props;
  return (
    <StyledPopup>
      <div className="popup-inner">
        <h2>{mainHeading}</h2>
        <a className="popup-close" onClick={closeBtnAction}>
          &times;
        </a>
        <div className="popup-content">{props.children}</div>
        {!hideButtons ? (
          <div className="popup-footer">
            <StyledButton className="inverse" onClick={btn1Action}>
              {btn1Text}
            </StyledButton>
            <StyledButton onClick={btn2Action}>{btn2Text}</StyledButton>
          </div>
        ) : null}
      </div>
    </StyledPopup>
  );
};

export default Popup;
