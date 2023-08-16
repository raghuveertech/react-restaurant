import { styled } from "styled-components";
import * as variables from "src/variables";

export const StyledAboutSection = styled.section`
  max-width: 1240px;
  margin: auto;
  padding: 80px 0;
  .row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .image {
      flex: 0 0 50%;
      max-width: 50%;
      padding: 0 40px;
      height: 450px;
      position: relative;
      overflow: hidden;
      .image-container {
        position: relative;
        overflow: hidden;
        height: 100%;
        img {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: auto;
        }
        &:after {
          position: absolute;
          background-color: rgb(0 0 0 / 30%);
          content: "";
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          transition: all 0.3s;
        }
        .image-angle-icon-top {
          position: absolute;
          width: 100px;
          height: 100px;
          top: 50px;
          left: 50px;
          background-color: transparent;
          border-top: 3px solid ${variables.white};
          border-left: 3px solid ${variables.white};
          z-index: 2;
          transition: all 0.3s;
        }
        .image-angle-icon-bottom {
          position: absolute;
          width: 100px;
          height: 100px;
          bottom: 50px;
          right: 50px;
          background-color: transparent;
          border-right: 3px solid ${variables.white};
          border-bottom: 3px solid ${variables.white};
          z-index: 2;
          transition: all 0.3s;
        }
        &:hover {
          &:after {
            background-color: rgb(0 0 0 / 20%);
          }
          .image-angle-icon-top {
            top: 20px;
            left: 20px;
          }
          .image-angle-icon-bottom {
            bottom: 20px;
            right: 20px;
          }
        }
      }
    }
    .text {
      flex: 0 0 50%;
      max-width: 50%;
      padding: 0 40px;
      h2 {
        margin-bottom: 20px;
      }
      p {
        line-height: 30px;
        letter-spacing: 0.2px;
      }
      ul {
        margin-bottom: 20px;
        padding-left: 20px;
        list-style: none;
        li {
          line-height: 30px;
          letter-spacing: 0.2px;
          position: relative;
          &:before {
            position: absolute;
            left: -20px;
            content: "•";
            color: ${variables.primaryColor};
          }
        }
      }
    }
  }
`;
