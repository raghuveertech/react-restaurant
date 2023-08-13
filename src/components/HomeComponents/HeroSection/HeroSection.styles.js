import { styled } from "styled-components";
import * as variables from "src/variables";

export const StyledHeroContainer = styled.div`
  width: 100%;
  height: calc(100vh - 84px);
  background-image: url("images/shape.png");
  background-position: bottom left;
  background-size: 50% auto;
  background-repeat: no-repeat;
  margin-top: 84px;
  display: flex;
  justify-content: right;
  .hero-inner {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .left {
    padding: 0 200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .hero-heading {
      color: ${variables.secondaryColor};
      margin-bottom: 20px;
      font-size: 54px;
      line-height: 60px;
      span {
        color: ${variables.primaryColor};
      }
    }
    .view-menu {
      width: 150px;
    }
  }
  .right {
    display: flex;
    align-items: flex-end;
    img {
      height: 90%;
      width: auto;
      filter: drop-shadow(-3px 0px 5px #2125295e);
    }
  }
`;
