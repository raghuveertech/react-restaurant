import { createGlobalStyle, styled } from "styled-components";
import * as variables from "src/variables";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${variables.primaryFont};
  }
  h1, .h1 {
    font-family: ${variables.secondaryFont};
    font-size: 100px;
    line-height: 120px;
    font-weight: normal;
    color: ${variables.primaryColor};
    letter-spacing: 1px;
    &.white {
      color: ${variables.white};
    }
  }
  h2, .h2 {
    font-family: ${variables.secondaryFont};
    font-size: 48px;
    line-height: 60px;
    font-weight: normal;
    color: ${variables.primaryColor};
    &.white {
      color: ${variables.white};
    }
  }
  p, .p {
    font-family: ${variables.primaryFont};
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 15px;
    color: ${variables.primaryColor};
    &.white {
      color: ${variables.white};
    }
  }
  .container {
    max-width: 1280px;
    margin: auto;
    padding: 0 15px;
  }
  @keyframes MoveUpDown {
    0%, 100% {
      bottom: -30px;
    }
    50% {
      bottom: -20px;
    }
  }
`;

export const StyledHeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    background-color: rgba(0 0 0 / 50%);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .hero-content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: ${variables.white};
    z-index: 1;
  }
  .view-menu {
    position: absolute;
    left: 50%;
    bottom: 75px;
    transform: translateX(-50%);
    text-decoration: none;
    font-size: 50px;
    color: ${variables.white};
    font-family: ${variables.secondaryFont};
    z-index: 2;
    letter-spacing: 3px;
    &:after {
      content: "";
      position: absolute;
      bottom: -30px;
      border: solid ${variables.white};
      border-width: 0 5px 5px 0;
      display: inline-block;
      padding: 10px;
      transform: translateX(-50%) rotate(45deg);
      left: 50%;
      animation: MoveUpDown 1s linear infinite;
    }
  }
`;
