import * as variables from "src/variables";
import { styled } from "styled-components";

export const StyledMenuContainer = styled.section`
  background-image: url("images/shape-inverted.png");
  background-position: top right;
  background-size: 50% auto;
  background-repeat: no-repeat;
  padding: 30px 15px;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  .menu-items {
    max-width: 1240px;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
  }
`;
