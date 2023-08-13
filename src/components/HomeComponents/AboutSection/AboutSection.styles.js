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
