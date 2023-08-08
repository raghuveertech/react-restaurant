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
  height: calc(100vh - 96px);
  background-color: ${variables.quaternaryColor};
  margin-top: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  .hero-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
  }
  .left {
    padding: 0 20px;
    .hero-heading {
      color: ${variables.secondaryColor};
      margin-bottom: 20px;
    }
  }
  .right {
    padding: 0 20px;
    img {
      width: 400px;
    }
  }
`;
