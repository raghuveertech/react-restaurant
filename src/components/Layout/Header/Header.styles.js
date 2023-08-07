import styled from "styled-components";
import * as variables from "src/variables";

export const StyledHeader = styled.header`
  background: ${variables.primaryColor};
  padding: 10px 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 3;
  .logo {
    width: 180px;
    img {
      width: 100%;
      -webkit-filter: brightness(0) invert(1);
      filter: brightness(0) invert(1);
    }
  }
`;
