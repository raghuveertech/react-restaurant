import styled from "styled-components";
import * as variables from "src/variables";

export const StyledHeader = styled.header`
  background: ${variables.white};
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
    width: 150px;
    display: flex;
    img {
      width: 100%;
    }
  }
  .main-menu {
    ul {
      display: flex;
      align-items: center;
      list-style: none;
      li {
        margin: 0 10px;
        a {
          position: relative;
          color: ${variables.tertiaryColor};
          text-transform: uppercase;
          text-decoration: none;
          font-weight: 700;
          transition: color 0.3s;
          &:after {
            position: absolute;
            bottom: -7px;
            left: 0;
            width: 0%;
            height: 2px;
            content: "";
            background-color: ${variables.primaryColor};
            transition: width 0.3s;
          }
          &.active,
          &:hover {
            color: ${variables.black};
            &:after {
              width: 100%;
            }
          }
        }
      }
    }
  }
`;
