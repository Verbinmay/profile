import styled from "styled-components";
import { myTheme } from "../styles/Theme";

export const Link = styled.a`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;
  position: relative;
  z-index: 0;

  &:hover {
    &::before {
      height: 10px;
    }
  }
  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    background-color: ${myTheme.colors.accent};
    z-index: -1;
  }
`;
