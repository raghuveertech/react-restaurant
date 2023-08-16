import * as variables from "src/variables";
import styled from "styled-components";

export const StyledPopup = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: 5;
  background-color: rgb(0 0 0 / 25%);
  backdrop-filter: blur(5px);
  .popup-inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    width: 100%;
    max-width: 700px;
    background-color: ${variables.white};
    border-radius: 5px;
    padding: 20px;
    h2 {
      text-align: center;
    }
    .popup-close {
      position: absolute;
      cursor: pointer;
      top: 0;
      right: 10px;
      font-size: 40px;
      color: ${variables.gray};
      &:hover {
        color: ${variables.secondaryColor};
      }
    }
    .popup-content {
      min-height: 200px;
    }
    .popup-footer {
      display: flex;
      justify-content: space-between;
      padding: 20px 0 10px 0;
      button {
        font-size: 14px;
      }
    }
  }
`;
